import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const createOneButtonAlert = () =>
  Alert.alert("Pending....", "Will be made available shortly", [
    {
      text: "OK",
      style: "Ok",
    },
  ]);

const TransactionSubs = ({ icon2, title2, onPress }) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          padding: 20,
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Text>{icon2}</Text>
        {/* <FontAwesome name="question-circle-o" size={24} color="gray" /> */}

        <Text style={{ paddingLeft: 12 }}>{title2}</Text>
      </View>
      <TouchableOpacity style={{ paddingRight: 12 }} onPress={onPress}>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

const AirtimeScreen = ({ navigation }) => {
  return (
    <View style={{ padding: 0 }}>
      <View style={{ padding: 20 }}>
        <Text style={{ fontWeight: "bold", fontSize: 17 }}>
          Select Network To Recharge
        </Text>
      </View>
      <View>
        <TransactionSubs
          icon2={
            <MaterialIcons name="network-check" size={24} color="#0E60E2" />
          }
          title2="MTN VTU"
          onPress={createOneButtonAlert}
        />
      </View>
      <View style={{ top: 40 }}>
        <TransactionSubs
          icon2={
            <MaterialCommunityIcons
              name="access-point-network"
              size={24}
              color="#0E60E2"
            />
          }
          title2="GLO VTU"
          onPress={createOneButtonAlert}
        />
      </View>
      <View style={{ top: 80 }}>
        <TransactionSubs
          icon2={
            <MaterialCommunityIcons
              name="account-network"
              size={24}
              color="#0E60E2"
            />
          }
          title2="AIRTEL VTU"
          onPress={createOneButtonAlert}
        />
      </View>
    </View>
  );
};

export default AirtimeScreen;
