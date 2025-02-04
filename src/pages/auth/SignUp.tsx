import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";

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
import { API } from "@/api";

const SignUpSchema = z.object({
  ...emailValidations,
  ...usernameValidations,
  ...passwordValidations.signUp,
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

  const onSubmit: SubmitHandler<SignUpModel> = async (userData) => {
    const { success, data, error } = await API.SignUp({ userData });
    if (success) {
      toast.success("User created successfully");
      localStorage.setItem("token", data.token);
    } else {
      console.error(error);
      toast.error("Something went wrong");
    }
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
