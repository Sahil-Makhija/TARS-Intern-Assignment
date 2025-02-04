import React from "react";

import { useSpeechRecognition } from "@/hooks/use-speech-recognition";

import { Mic, MicOff } from "lucide-react";
import { Button } from "@/components/ui";

export const SpeechInput: React.FC = () => {
  const { isListening, error, startListening, stopListening, text } =
    useSpeechRecognition({
      durationInMinutes: 1,
    });

  console.log(isListening, error, text);

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
