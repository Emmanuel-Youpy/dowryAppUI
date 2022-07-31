import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const CharterScreen = () => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <View
        style={{
          height: 370,
          width: "80%",
          borderWidth: 1,
          borderColor: "lightgray",
          alignItems: "center",
          padding: 30,
        }}
      >
        <Text style={{ color: "gray", textAlign: "center" }}>
          To make a bus charter kindly call the below customer service
          representative for reservations
        </Text>
        <TouchableOpacity
          style={{
            height: 50,
            width: "75%",
            margin: 12,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "gray",
            padding: 10,
            backgroundColor: "#0E60E2",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Ionicons name="md-call-sharp" size={20} color="white" />
            <Text style={{ color: "white", fontSize: 18, paddingLeft: 10 }}>
              09165785430
            </Text>
          </View>
        </TouchableOpacity>
        <Text style={{ color: "gray" }}>Or copy number or email address</Text>
        <TouchableOpacity
          style={{
            height: 50,
            width: "75%",
            margin: 12,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#0E60E2",
            padding: 10,
            backgroundColor: "white",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <FontAwesome5 name="copy" size={20} color="#0E60E2" />
            <Text style={{ color: "#0E60E2", fontSize: 18, paddingLeft: 10 }}>
              09165785430
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 50,
            width: "75%",
            margin: 12,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "gray",
            padding: 10,
            backgroundColor: "white",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <FontAwesome5 name="copy" size={20} color="#0E60E2" />
            <Text style={{ color: "#0E60E2", fontSize: 18, paddingLeft: 10 }}>
              youpil@gmail.com
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CharterScreen;
