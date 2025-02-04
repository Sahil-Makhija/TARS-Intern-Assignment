import React, { useEffect } from "react";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Textarea,
  FormDescription,
} from "../ui";
import { useFormContext } from "react-hook-form";
import { z } from "zod";
import { useNoteModal } from "@/hooks";

export const transcriptValidations = {
  audioTranscription: z.string(),
};

export const TranscriptField: React.FC = () => {
  const { control, setValue } = useFormContext();
  const { audioTranscription } = useNoteModal();
  useEffect(() => {
    setValue("audioTranscription", audioTranscription);
  }, [audioTranscription, setValue]);
  return (
    <FormField
      control={control}
      name="audioTranscription"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Audio Transcript</FormLabel>
          <FormControl>
            <Textarea placeholder="..." className="resize-none" {...field} />
          </FormControl>
          <FormDescription>Your audio transcript</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
