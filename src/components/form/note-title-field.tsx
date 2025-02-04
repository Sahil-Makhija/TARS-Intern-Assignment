import { useFormContext } from "react-hook-form";
import { z } from "zod";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Input,
} from "../ui";

export const titleValidations = {
  title: z.string(),
};

export const NoteTitleField = ({ hideLabel }: { hideLabel?: boolean }) => {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name="title"
      render={({ field }) => (
        <FormItem>
          {!hideLabel && <FormLabel>Note Title</FormLabel>}
          <FormControl>
            <Input placeholder="Enter your title" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
