import React, { useReducer, useCallback } from "react";
import { Input } from "../components/Input";
import { Feather } from "@expo/vector-icons";
import { SubmitButton } from "../components/SubmitButton";
import { validateInput } from "../utils/actions/performActions";
import { reducer } from "../utils/reducers/formReducer";

export const SignInForm = () => {
  const initialState = {
    inputValidities: {
      email: false,
      password: false,
    },
    formIsValid: false,
  };

  const [formState, dispatchFormState] = useReducer(reducer, initialState);

  const inputChangeHandler = useCallback(
    (inputId, inputValue) => {
      const result = validateInput(inputId, inputValue);
      dispatchFormState({ inputId, validationResult: result });
    },
    [dispatchFormState]
  );

  return (
    <>
      <Input
        id="email"
        label="Email"
        icon="mail"
        iconPack={Feather}
        autoCapitalize="none"
        onInputChanged={inputChangeHandler}
        errorText={formState.inputValidities["email"]}
      />
      <Input
        id="password"
        label="Password"
        icon="lock"
        iconPack={Feather}
        autoCapitalize="none"
        secureTextEntry
        onInputChanged={inputChangeHandler}
        errorText={formState.inputValidities["password"]}
      />
      <SubmitButton disabled={!formState.formIsValid} text="Sign In" />
    </>
  );
};
