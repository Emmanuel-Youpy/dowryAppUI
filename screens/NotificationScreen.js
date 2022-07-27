import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const NotificationScreen = () => {
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
      <View style={{ paddingTop: 250 }}>
        <Text>
          <MaterialIcons name="notifications-none" size={80} color="#0E60E2" />
        </Text>
      </View>
      <View style={{ paddingBottom: 10 }}>
        <Text style={{ fontWeight: "400", fontSize: 20 }}>
          No Notifications yet{" "}
        </Text>
      </View>
      <Text style={{ color: "gray" }}>
        Notifications will appear here once you have any{" "}
      </Text>
    </View>
  );
};

export default NotificationScreen;
