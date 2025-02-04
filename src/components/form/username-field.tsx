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

export const usernameValidations = {
  username: z.string().trim().toLowerCase().min(5),
};

export const UsernameField = () => {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name="username"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Username</FormLabel>
          <FormControl>
            <Input placeholder="Enter your username" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
