import React from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const RedeemTicketScreen = () => {
  return (
    <View
      style={{
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <MaterialCommunityIcons
        name="ticket-percent-outline"
        size={85}
        color="#0E60E2"
      />
      <Text style={{ fontWeight: "600", fontSize: 18 }}>
        No Reddem Tickets.
      </Text>
      <Text style={{ color: "gray", paddingTop: 10 }}>
        All unused tickets which have been scanned appears here
      </Text>
    </View>
  );
};

export default RedeemTicketScreen;
