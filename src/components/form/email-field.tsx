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

export const emailValidations = {
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Please enter a valid email address"),
};

export const EmailField = () => {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name="email"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Email Address</FormLabel>
          <FormControl>
            <Input placeholder="Enter your email" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
