import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Divider, useTheme } from "@rneui/themed";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const SettingSubs = ({ icon2, title2 }) => {
  return (
    <View
      style={{
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
      <TouchableOpacity style={{ paddingRight: 12 }}>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

const SettingScreen = () => {
  const createTwoButtonAlert = () =>
    Alert.alert("Make changes to your profile", "Edit Profile", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  return (
    <View>
      <View style={{ padding: 20, paddingTop: 100, alignItems: "center" }}>
        <Text>
          <MaterialIcons name="account-circle" size={65} color="#0E60E2" />
        </Text>
        <View style={{ paddingTop: 15, paddingBottom: 15 }}>
          <Text>Berlin</Text>
        </View>
        <TouchableOpacity
          style={{
            width: 100,
            padding: 5,
            backgroundColor: "#0E60E2",
            alignItems: "center",
            borderRadius: 10,
          }}
          onPress={createTwoButtonAlert}
        >
          <Text style={{ color: "white" }}>PROFILE</Text>
        </TouchableOpacity>
      </View>
      <View style={{ paddingTop: 40 }}>
        <SettingSubs
          icon2={<AntDesign name="gift" size={24} color="#0E60E2" />}
          title2="Badges"
        />
        <Divider />
        <SettingSubs
          icon2={<AntDesign name="lock" size={24} color="#0E60E2" />}
          title2="Change Pin"
        />
        <Divider />
        <SettingSubs
          icon2={
            <AntDesign name="exclamationcircleo" size={24} color="#0E60E2" />
          }
          title2="About Cowry"
        />
        <Divider />
        <SettingSubs
          icon2={<Ionicons name="ios-star-outline" size={24} color="#0E60E2" />}
          title2="Rate App"
        />
        <Divider />
        <SettingSubs
          icon2={<AntDesign name="logout" size={24} color="#0E60E2" />}
          title2="Logout"
        />
        <Divider />
      </View>
    </View>
  );
};

export default SettingScreen;
