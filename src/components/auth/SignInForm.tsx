"use client";

import { SignInFormCredentials } from "./SignInFormCredentials";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { Typography } from "@/components/ui/typography";
import { useQuery } from "@tanstack/react-query";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";

export const SignInForm = () => {
  const { data: providers, isPending } = useQuery({
    queryFn: () => fetch(`/api/auth/providers`).then((res) => res.json()),
    queryKey: ["providers"],
  });

  if (isPending) {
    return (
      <div className="flex flex-col gap-4">
        <Skeleton className="h-3 w-12" />
        <Skeleton className="h-9" />
      </div>
    );
  }

  if (typeof providers !== "object") {
    return (
      <Alert>
        <AlertTriangle size={16} />
        <AlertTitle>
          The provider is not available. It's due to a misconfiguration in the
          <Typography variant="code">auth.ts</Typography> file.
        </AlertTitle>
        <AlertDescription>
          Please go to{" "}
          <Typography variant="link" as={Link} href="">
            the Now.TS documentation
          </Typography>{" "}
          to resolve the issue.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <SignInFormCredentials />
    </div>
  );
};
