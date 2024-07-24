import { env } from "../env";
import { getCredentialsProvider } from "./credentials-provider";
import { NextAuthConfig } from "next-auth";

type Providers = NonNullable<NextAuthConfig["providers"]>;

export const nextAuthProviders = () => {
  const providers: Providers = [getCredentialsProvider()];

  return providers;
};
