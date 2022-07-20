import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

const RegisterScreen = ({ navigation }) => {
  const [text, setText] = useState("");

  const isFormValid = useMemo(() => {
    return text.length > 0;
  }, [text.text]);
  return (
    <SafeAreaView>
      <View style={{ padding: 20 }}>
        <View>
          <Ionicons name="arrow-back" size={30} color="#0E60E2" />
          <Text
            style={{
              paddingTop: 20,
              fontWeight: "700",
              fontSize: 30,
              color: "#0E60E2",
            }}
          >
            Dowry
          </Text>
        </View>
        <View style={{ marginTop: 270 }}>
          <Text style={{ fontSize: 18 }}>Phone Number</Text>
          <View>
            <TextInput
              style={{
                height: 50,
                width: 390,
                margin: 12,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: "gray",
                padding: 10,
                left: -13,
              }}
              placeholder="Phone Number"
              keyboardType="numeric"
              value={text}
              onChangeText={setText}
            />
          </View>
          <TouchableOpacity disabled={!isFormValid}>
            <View
              style={{
                height: 50,
                width: 390,
                margin: 12,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: "gray",
                padding: 10,
                left: -13,
                backgroundColor: "#0E60E2",
              }}
            >
              <Text style={{ color: "white", fontSize: 18 }}>CONFIRM</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
