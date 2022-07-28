import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const HistoryScreen = () => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          width: "90%",
          backgroundColor: "#D1E7EE",
          height: 170,
          borderRadius: 10,
          marginTop: 30,
        }}
      >
        <TouchableOpacity style={{ padding: 25 }}>
          <Ionicons name="wallet-outline" size={24} color="#0E60E2" />
          <Text
            style={{
              color: "#0E60E2",
              fontSize: 18,
              fontWeight: "bold",
              paddingTop: 20,
            }}
          >
            Wallet Bus Transactions
          </Text>
          <View
            style={{
              paddingTop: 20,
            }}
          >
            <Text style={{ color: "black", fontSize: 14 }}>
              View all your wallet transactions for all trips
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{
          width: "90%",
          backgroundColor: "#D1E7EE",
          height: 170,
          borderRadius: 10,
          marginTop: 30,
        }}
      >
        <View style={{ padding: 25 }}>
          <AntDesign name="creditcard" size={24} color="#0E60E2" />
          <Text
            style={{
              color: "#0E60E2",
              fontSize: 18,
              fontWeight: "bold",
              paddingTop: 20,
            }}
          >
            Card Bus Transactions
          </Text>
          <View
            style={{
              paddingTop: 20,
            }}
          >
            <Text style={{ color: "black", fontSize: 14 }}>
              View all your card bus transactions for all each cards
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HistoryScreen;
