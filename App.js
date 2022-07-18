import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreens from "./screens/LoginScreens";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  return (
    <NavigationContainer>
      <View>
        {/* <LoginScreens /> */}
        <HomeScreen />
      </View>
    </NavigationContainer>
  );
}
