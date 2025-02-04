import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Button,
  ConfirmPasswordField,
  confirmPasswordValidations,
  EmailField,
  emailValidations,
  Form,
  PasswordField,
  passwordValidations,
  UsernameField,
  usernameValidations,
} from "@/components";
import { Link } from "@tanstack/react-router";

const SignUpSchema = z.object({
  ...emailValidations,
  ...usernameValidations,
  ...passwordValidations,
  ...confirmPasswordValidations,
});

export type SignUpModel = z.infer<typeof SignUpSchema>;

export const SignUp: React.FC = () => {
  const form = useForm<SignUpModel>({
    mode: "onSubmit",
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit: SubmitHandler<SignUpModel> = async (data) => {
    console.log(data);
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6"
        >
          <UsernameField />
          <EmailField />
          <PasswordField />
          <ConfirmPasswordField />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
      <Link to="/auth/sign-in">Existing User ? Sign In</Link>
    </>
  );
};
