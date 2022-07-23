import React, { useState, useMemo, Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
  Touchable,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

const RegisterScreen = ({ navigation }) => {
  // export default class RegisterScreen extends Component {
  //   createTwoButtonAlert = () =>
  //     Alert.alert("Alert Title", "My Alert Msg", [
  //       {
  //         text: "Cancel",
  //         onPress: () => console.log("Cancel Pressed"),
  //         style: "cancel",
  //       },
  //       { text: "OK", onPress: () => console.log("OK Pressed") },
  //     ]);
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       number: "",
  //     };
  //   }
  //   // const [text, setText] = useState("");

  //   validate_fiel = () => {
  //     const { username } = this.state;
  //     if (number == "") {
  //       alert("Please fill username");
  //       return false;
  //     }
  //     return true;
  //   };

  //   // Conditional Click

  //   making_call = () => {
  //     if (this.validate_fiel()) {
  //       alert("Successfull");
  //     }
  //   };
  //   render({ navigation }) {
  return (
    <SafeAreaView>
      <View style={{ padding: 20 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
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
        </TouchableOpacity>
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
              onChangeText={(value) => this.setState({ number: value })}
            />
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
            <Text style={{ color: "white", fontSize: 18 }}>CONFIRM</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
