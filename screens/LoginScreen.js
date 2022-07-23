import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={{ padding: 20, alignItems: "center" }}>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <View
            style={{
              backgroundColor: "#0E60E2",
              width: 350,
              height: 70,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 15,
            }}
          >
            <Text style={{ color: "white", fontSize: 25 }}>REGISTER</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Logiin")}>
          <View
            style={{
              marginTop: 20,
              backgroundColor: "white",
              width: 350,
              height: 70,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 15,
              borderWidth: 1,
              borderColor: "#0E60E2",
            }}
          >
            <Text style={{ color: "black", fontSize: 25 }}>LOGIN</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
