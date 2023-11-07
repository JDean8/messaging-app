import "react-native-gesture-handler";
import { ChatList } from "../screens/ChatList";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainSettings } from "../screens/MainSettings";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerTitle: "" }}>
      <Tab.Screen
        name="ChatList"
        component={ChatList}
        options={{
          tabBarLabel: "Chats",
          tabBarIcon: ({ color, size }) => {
            return <Feather name="message-circle" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={MainSettings}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => {
            return <Feather name="settings" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
