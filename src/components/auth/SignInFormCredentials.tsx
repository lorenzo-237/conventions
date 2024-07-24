"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useZodForm,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Typography } from "@/components/ui/typography";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { z } from "zod";

const LoginCredentialsFormScheme = z.object({
  email: z.string().email(),
  password: z.string().min(8).optional(),
});

type LoginCredentialsFormType = z.infer<typeof LoginCredentialsFormScheme>;

export const SignInFormCredentials = () => {
  const form = useZodForm({
    schema: LoginCredentialsFormScheme,
    defaultValues: {
      email: "lorenzo.magni@test.fr",
      password: "Lorenzo34",
    },
  });
  const searchParams = useSearchParams();

  async function onSubmit(values: LoginCredentialsFormType) {
    await signIn("credentials", {
      email: values.email,
      password: values.password,
      callbackUrl: searchParams.get("callbackUrl") ?? undefined,
    });
  }

  return (
    <Form form={form} onSubmit={onSubmit} className="max-w-lg space-y-4">
      <Typography variant="small">Se connecter avec votre mdp</Typography>
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder="john@doe.com" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem className="flex-1">
            <FormLabel>Mot de passe</FormLabel>
            <FormControl>
              <Input type="password" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <Button type="submit" className="w-full">
        Se connecter
      </Button>
    </Form>
  );
};
