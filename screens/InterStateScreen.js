import React from "react";
import { View, Alert, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const createOneButtonAlert = () =>
  Alert.alert("Pending....", "Will be made available shortly", [
    {
      text: "OK",
      style: "Ok",
    },
  ]);

const InterStateScreen = ({ navigation }) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity
        onPress={createOneButtonAlert}
        style={{
          width: "90%",
          backgroundColor: "#fbf0f4",
          height: 170,
          borderRadius: 10,
          marginTop: 30,
        }}
      >
        <View style={{ padding: 25 }}>
          <Feather name="smartphone" size={24} color="pink" />
          <Text
            style={{
              color: "black",
              fontSize: 18,
              fontWeight: "bold",
              paddingTop: 20,
            }}
          >
            Inter State Bookings
          </Text>
          <View
            style={{
              paddingTop: 20,
            }}
          >
            <Text style={{ color: "black", fontSize: 14 }}>
              Book your inter state bus ticket before hand{" "}
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Booking")}
        style={{
          width: "90%",
          backgroundColor: "lightgray",
          height: 170,
          borderRadius: 10,
          marginTop: 30,
        }}
      >
        <View style={{ padding: 25 }}>
          <Fontisto name="spinner-refresh" size={24} color="green" />
          <Text
            style={{
              color: "green",
              fontSize: 18,
              fontWeight: "bold",
              paddingTop: 20,
            }}
          >
            Booking Transactions
          </Text>
          <View
            style={{
              paddingTop: 20,
            }}
          >
            <Text style={{ color: "black", fontSize: 14 }}>
              View all inter state booking transactions
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default InterStateScreen;
