import React, { useEffect } from "react";
import { Mic, MicOff } from "lucide-react";

import { useSpeechRecognition } from "@/hooks/use-speech-recognition";

import { Button } from "@/components/ui";
import { useNoteModal } from "@/hooks";

export const SpeechInput: React.FC = () => {
  const { isListening, error, startListening, stopListening, text } =
    useSpeechRecognition({
      durationInMinutes: 1,
    });

  const { setAudioTranscription, open } = useNoteModal();

  useEffect(() => {
    if (isListening) return;
    if (!text && !error) return;
    if (text) {
      setAudioTranscription(text);
    } else {
      setAudioTranscription(error as string);
    }
    open();
  }, [isListening]);

  return (
    <Button
      onClick={isListening ? stopListening : startListening}
      variant={"destructive"}
      border={"rounded"}
      className="font-bold cursor-pointer"
    >
      {isListening ? (
        <>
          <MicOff size={72} />
          stop recording
        </>
      ) : (
        <>
          <Mic size={72} />
          start recording
        </>
      )}
    </Button>
  );
};
