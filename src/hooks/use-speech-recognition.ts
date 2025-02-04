import { useState, useEffect, useRef } from "react";

// Define types for SpeechRecognition and SpeechRecognitionEvent
interface SpeechRecognition extends EventTarget {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  onstart: (() => void) | null;
  onend: (() => void) | null;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  onerror: ((event: SpeechRecognitionErrorEvent) => void) | null;
  start(): void;
  stop(): void;
}

interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
}

interface SpeechRecognitionResultList {
  length: number;
  item(index: number): SpeechRecognitionResult;
  [index: number]: SpeechRecognitionResult;
}

interface SpeechRecognitionResult {
  isFinal: boolean;
  length: number;
  item(index: number): SpeechRecognitionAlternative;
  [index: number]: SpeechRecognitionAlternative;
}

interface SpeechRecognitionAlternative {
  transcript: string;
  confidence: number;
}

interface SpeechRecognitionErrorEvent extends Event {
  error: string;
}

interface UseSpeechRecognitionOptions {
  lang?: string;
  continuous?: boolean;
  durationInMinutes?: number;
}

interface UseSpeechRecognitionResult {
  text: string;
  isListening: boolean;
  error: string | null;
  startListening: () => void;
  stopListening: () => void;
}

export const useSpeechRecognition = ({
  lang = "en-US",
  continuous = true,
  durationInMinutes = 1,
}: UseSpeechRecognitionOptions = {}): UseSpeechRecognitionResult => {
  const [text, setText] = useState<string>("");
  const [isListening, setIsListening] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (
      !("webkitSpeechRecognition" in window || "SpeechRecognition" in window)
    ) {
      setError("Speech recognition is not supported in this browser.");
      return;
    }

    const SpeechRecognition =
      window.SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.lang = lang;
    recognition.continuous = continuous;
    recognition.interimResults = true;

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0].transcript)
        .join(" ");
      setText(transcript);
    };

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      setError(event.error);
      setIsListening(false);
    };

    recognitionRef.current = recognition;

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      recognition.stop();
    };
  }, [lang, continuous]);

  const startListening = () => {
    if (recognitionRef.current) {
      setText(""); // Clear previous text
      setError(null);
      recognitionRef.current.start();

      // Stop automatically after the given duration
      const durationInMs = durationInMinutes * 60 * 1000;
      timeoutRef.current = setTimeout(() => {
        stopListening();
      }, durationInMs);
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    }
  };

  return { text, isListening, error, startListening, stopListening };
};
