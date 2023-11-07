import React, { useCallback, useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import backgroundImg from "../assets/images/chat-background.jpg";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { colors } from "../constants/colors";

export const Chat = (props) => {
  const [messageText, setMessageText] = useState("");

  const sendMessage = useCallback(() => {
    setMessageText("");
  }, [messageText]);

  return (
    <SafeAreaView edges={["bottom"]} style={styles.container}>
      <ImageBackground
        style={styles.backgroundImg}
        source={backgroundImg}
      ></ImageBackground>
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.mediaButton}>
          <Feather name="file-plus" size={24} color={colors.blue} />
        </TouchableOpacity>
        <TextInput
          onSubmitEditing={sendMessage}
          onChangeText={(text) => {
            setMessageText(text);
          }}
          value={messageText}
          style={styles.textbox}
        />
        {messageText === "" && (
          <TouchableOpacity style={styles.mediaButton}>
            <Feather name="camera" size={24} color="#3498db" />
          </TouchableOpacity>
        )}
        {messageText !== "" && (
          <TouchableOpacity
            onPress={sendMessage}
            style={{ ...styles.mediaButton, ...styles.sendButton }}
          >
            <Feather name="send" size={18} color="white" />
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  backgroundImg: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 10,
    height: 50,
  },
  textbox: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: colors.blue,
    marginHorizontal: 15,
    paddingHorizontal: 12,
  },
  mediaButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 35,
  },
  sendButton: {
    backgroundColor: colors.blue,
    borderRadius: 50,
    padding: 5,
  },
});
