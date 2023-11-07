import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PageContainer } from "../components/PageContainer";

import { SignUpForm } from "../components/SignUpForm";
import { SignInForm } from "../components/SignInForm";
import { colors } from "../constants/colors";

export const AuthScreen = (props) => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <PageContainer>
        {isSignUp ? <SignUpForm /> : <SignInForm />}
        <TouchableOpacity
          style={styles.linkContainer}
          onPress={() =>
            setIsSignUp((state) => {
              return !state;
            })
          }
        >
          <Text style={styles.link}>{`Switch to ${
            isSignUp ? "sign in" : "sign up"
          }`}</Text>
        </TouchableOpacity>
      </PageContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  linkContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  link: {
    color: colors.blue,
    fontFamily: "bold",
    letterSpacing: 0.3,
  },
});
