import React from "react";
import { Input } from "../components/Input";
import { Feather } from "@expo/vector-icons";
import { SubmitButton } from "../components/SubmitButton";

export const SignUpForm = () => {
  return (
    <>
      <Input label="First Name" icon="user" iconPack={Feather} />
      <Input label="Last Name" icon="user" iconPack={Feather} />
      <Input label="Email" icon="mail" iconPack={Feather} />
      <Input label="Password" icon="lock" iconPack={Feather} />
      <SubmitButton disabled={false} text="Sign Up" />
    </>
  );
};