import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { ChatSettings } from "../screens/ChatSettings";
import { Chat } from "../screens/Chat";
import { TabNavigator } from "./TabNavigator";

const Stack = createStackNavigator();

export const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChatSettings"
        component={ChatSettings}
        options={{
          gestureEnabled: true,
          headerTitle: "Settings",
        }}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{
          gestureEnabled: true,
          headerTitle: "",
        }}
      />
    </Stack.Navigator>
  );
};
