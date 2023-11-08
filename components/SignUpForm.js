import React, { useCallback, useReducer } from "react";
import { Input } from "../components/Input";
import { Feather } from "@expo/vector-icons";
import { SubmitButton } from "../components/SubmitButton";
import { validateInput } from "../utils/actions/performActions";
import { reducer } from "../utils/reducers/formReducer";

export const SignUpForm = () => {
  const initialState = {
    inputValidities: {
      firstName: false,
      lastName: false,
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
        id="firstName"
        label="First Name"
        icon="user"
        iconPack={Feather}
        onInputChanged={inputChangeHandler}
        errorText={formState.inputValidities["firstName"]}
      />
      <Input
        id="lastName"
        label="Last Name"
        icon="user"
        iconPack={Feather}
        onInputChanged={inputChangeHandler}
        keyboardType="email-address"
        autoCapitalize="none"
        errorText={formState.inputValidities["lastName"]}
      />
      <Input
        id="email"
        label="Email"
        icon="mail"
        iconPack={Feather}
        onInputChanged={inputChangeHandler}
        errorText={formState.inputValidities["email"]}
      />
      <Input
        id="password"
        label="Password"
        icon="lock"
        iconPack={Feather}
        onInputChanged={inputChangeHandler}
        autoCapitalize="none"
        secureTextEntry
        errorText={formState.inputValidities["password"]}
      />
      <SubmitButton text="Sign Up" disabled={!formState.formIsValid} />
    </>
  );
};
