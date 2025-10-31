"use client";
import { Button } from "../ui/button";
import Image from "next/image";
import ROUTES from "@/constants/routes";
import { signIn } from "next-auth/react";
import { toast } from "sonner";

const SocialAuthForms = () => {
  const buttonClass =
    "background-dark400_light900 body-medium text-dark200_light800 rounded-2 min-h-12 flex-1 px-4 py-3.5";
  const handleSignIn = async (provider: "google" | "github") => {
    try {
      await signIn(provider, { callbackUrl: ROUTES.HOME, redirect: true });
    } catch (error) {
      toast.error("Sign-in Failed", {
        description: error instanceof Error ? error.message : "An error occured during sign-in",
      });
    }
  };
  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className={buttonClass} onClick={() => handleSignIn("github")}>
        <Image
          src="/icons/github.svg"
          alt="Github Logo"
          width="20"
          height="20"
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Login with Github</span>
      </Button>
      <Button className={buttonClass} onClick={() => handleSignIn("google")}>
        <Image src="/icons/google.svg" alt="Github Logo" width="20" height="20" className="mr-2.5 object-contain" />
        <span>Login with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForms;
