import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { useNavigate } from "@tanstack/react-router";

import { API } from "@/api";
import {
  Button,
  EmailField,
  emailValidations,
  Form,
  PasswordField,
  passwordValidations,
} from "@/components";

const SignInSchema = z.object({
  ...emailValidations,
  ...passwordValidations.signIn,
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

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<SignInModel> = async (userData) => {
    const { success, data } = await API.SignIn({ userData });
    if (success) {
      navigate({ to: "/app" });
      toast.success("User signed in successfully");
      localStorage.setItem("token", data.token);
    } else {
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
          <EmailField />
          <PasswordField />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
      <Link to="/auth/sign-up">New User ? Sign Up</Link>
    </>
  );
};
