"use client";

import { signUpAction } from "./signup.action";
import { Button } from "@/components/ui/button";
import React from "react";
import { toast } from "sonner";

function PageTests() {
  const createUser = async () => {
    console.log("test");

    const { serverError, data } = await signUpAction({
      email: "lorenzo.magni@test.fr",
      name: "Lorenzo",
      password: "Lorenzo34",
      verifyPassword: "Lorenzo34",
    });

    if (serverError) {
      toast.error(serverError);
      return;
    }

    console.log(serverError);
    console.log(data);
  };

  return (
    <div>
      <Button onClick={() => createUser()}>Test</Button>
    </div>
  );
}

export default PageTests;
