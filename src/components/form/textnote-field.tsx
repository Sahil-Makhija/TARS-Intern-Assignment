import React from "react";

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

export const textNoteValidations = {
  content: z.string(),
};

export const TextNoteField: React.FC = () => {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name="content"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Text Note</FormLabel>
          <FormControl>
            <Textarea
              placeholder="Write here"
              className="resize-none"
              {...field}
            />
          </FormControl>
          <FormDescription>This is a Text Note.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
