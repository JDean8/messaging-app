import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export const ChatList = (props) => {
  return (
    <View style={styles.container}>
      <Text>ChatList Screen</Text>
      <Button
        title="Go to chat"
        onPress={() => {
          props.navigation.navigate("Chat");
        }}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
