import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const TrafficReport = () => {
  return (
    <View style={{ padding: 40, alignItems: "center" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: 290,
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
          <Text>Read</Text>
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
          <Text>Unread</Text>
        </TouchableOpacity>
      </View>
      <View style={{ paddingTop: 270, alignItems: "center", width: "80%" }}>
        <MaterialCommunityIcons
          name="traffic-light-outline"
          size={70}
          color="#0E60E2"
        />
        <Text style={{ fontWeight: "600", paddingTop: 20 }}>
          There is no traffic report yet
        </Text>
        <Text style={{ textAlign: "center", color: "gray", paddingTop: 10 }}>
          Updates on traffic along the Brt lane will appear here
        </Text>
      </View>
    </View>
  );
};

export default TrafficReport;
