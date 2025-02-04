import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Button,
  EmailField,
  emailValidations,
  Form,
  PasswordField,
  passwordValidations,
} from "@/components";
import { Link } from "@tanstack/react-router";

const SignInSchema = z.object({
  ...emailValidations,
  ...passwordValidations,
});

export type SignInModel = z.infer<typeof SignInSchema>;

export const SignIn: React.FC = () => {
  const form = useForm<SignInModel>({
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(SignInSchema),
  });

  const onSubmit: SubmitHandler<SignInModel> = async (data) => {
    console.log(data);
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6"
        >
          <EmailField />
          <PasswordField />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
      <Link to="/auth/sign-up">New User ? Sign Up</Link>
    </>
  );
};
