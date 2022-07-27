import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const WalletTransactions = () => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "90%",
          paddingTop: 30,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#E5E4E2",
            width: "50%",
            padding: 10,
            alignItems: "center",
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
          }}
        >
          <Text>20 july 2022</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            width: "50%",
            padding: 10,
            alignItems: "center",
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
          }}
        >
          <Text>20 july 2022</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          paddingTop: 20,
          width: "113%",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#E5E4E2",
            width: "80%",
            padding: 10,
            alignItems: "center",
            borderRadius: 10,
            paddingTop: 10,
            backgroundColor: "#0E60E2",
          }}
        >
          <Text style={{ color: "white" }}>GET</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "89%",
          paddingRight: 125,
          paddingTop: 20,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            width: "50%",
            padding: 10,
            alignItems: "center",
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
          }}
        >
          <Text style={{ color: "#0E60E2" }}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#E5E4E2",
            width: "50%",
            padding: 10,
            alignItems: "center",
            borderColor: "gray",
            borderWidth: 0.2,
          }}
        >
          <Text>Credits</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#E5E4E2",
            width: "50%",
            padding: 10,
            alignItems: "center",
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
          }}
        >
          <Text>Debit</Text>
        </TouchableOpacity>
      </View>
      <View style={{ paddingTop: 140, alignItems: "center", width: "80%" }}>
        <MaterialCommunityIcons name="bridge" size={65} color="#0E60E2" />
        <Text style={{ fontWeight: "600" }}>No transactions yet</Text>
        <Text style={{ textAlign: "center", color: "gray", paddingTop: 10 }}>
          Your transactions appears here when you fund your wallet or pay for a
          trip
        </Text>
      </View>
    </View>
  );
};

export default WalletTransactions;
