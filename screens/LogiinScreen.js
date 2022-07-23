import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Touchable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const LogiinScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={{ padding: 20 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="black" />
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
          <Text style={{ paddingTop: 15 }}>Login Securely to your account</Text>
        </TouchableOpacity>
        <View style={{ marginTop: 70 }}>
          <Text style={{ fontSize: 18, color: "gray" }}>
            Username or Phone Number
          </Text>
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
              onChangeText={(value) => this.setState({ number: value })}
            />
          </View>
        </View>
        <View style={{ marginTop: 40 }}>
          <Text style={{ fontSize: 18, color: "gray" }}>Password</Text>

          <View>
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
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "lightgray" }}>Password</Text>
              <Entypo name="eye-with-line" size={24} color="#0E60E2" />
            </View>

            <TouchableOpacity>
              <Text
                style={{
                  paddingTop: 20,
                  paddingBottom: 20,
                  color: "#0E60E2",
                  fontWeight: "bold",
                }}
              >
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            // onPress={() => this.making_call}
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
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 18 }}>LOGIN</Text>
          </TouchableOpacity>
          <View
            style={{
              padding: 10,
              alignItems: "cemter",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <View>
              <Text>
                Not a member?{" "}
                <Text style={{ color: "#0E60E2" }}> Register</Text>
              </Text>
            </View>
          </View>
          <View
            style={{
              alignItems: "cemter",
              justifyContent: "center",
              flexDirection: "row",
              padding: 15,
            }}
          >
            <Text style={{ fontWeight: "bold" }}>or</Text>
          </View>
          <View
            style={{
              alignItems: "cemter",
              justifyContent: "center",
              flexDirection: "row",
              padding: 15,
            }}
          >
            <Ionicons name="finger-print" size={60} color="#0E60E2" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LogiinScreen;
