import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PageContainer } from "../components/PageContainer";
import { SignUpForm } from "../components/SignUpForm";
import { SignInForm } from "../components/SignInForm";
import { colors } from "../constants/colors";
import logo from "../assets/images/logo.png";

export const AuthScreen = (props) => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <PageContainer>
        <ScrollView>
          <View style={styles.imageContainer}>
            <Image source={logo} resizeMode="contain" style={styles.image} />
          </View>
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
        </ScrollView>
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
  image: { width: "50%" },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "20%",
  },
});
