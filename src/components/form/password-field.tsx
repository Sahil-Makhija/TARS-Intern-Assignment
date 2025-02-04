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

export const passwordValidations = {
  signUp: {
    password: z
      .string()
      .min(8, { message: "Password should be at least 8 characters long" })
      .regex(/[A-Z]/, {
        message: "Password should contain at least one uppercase letter",
      })
      .regex(/[a-z]/, {
        message: "Password should contain at least one lowercase letter",
      })
      .regex(/[0-9]/, { message: "Password should contain at least one digit" })
      .regex(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/, {
        message: "Password should contain at least one special character",
      }),
  },
  signIn: {
    password: z.string(),
  },
};

export const PasswordField = () => {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name="password"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Password</FormLabel>
          <FormControl>
            <Input
              type="password"
              placeholder="Enter your password"
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
