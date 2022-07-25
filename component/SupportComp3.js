import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Divider, useTheme } from "@rneui/themed";
import { SimpleLineIcons } from "@expo/vector-icons";

const SupportSubs = ({ icon2, title2 }) => {
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
      <TouchableOpacity style={{ paddingRight: 12 }}>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

const SupportComp3 = ({ icon, title, header, supStyle }) => {
  return (
    <View>
      <View
        style={{
          backgroundColor: "white",
          paddingLeft: 20,
          paddingTop: 15,
        }}
      >
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>{header}</Text>
      </View>
      <View
        style={{
          backgroundColor: "white",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: 20,
        }}
      ></View>

      <SupportSubs
        icon2={
          <SimpleLineIcons name="social-instagram" size={24} color="#0E60E2" />
        }
        title2="Instagram"
      />
      <Divider />
      <SupportSubs
        icon2={
          <SimpleLineIcons name="social-facebook" size={24} color="#0E60E2" />
        }
        title2="Facebook"
      />
      <Divider />
      <SupportSubs
        icon2={
          <SimpleLineIcons name="social-twitter" size={24} color="#0E60E2" />
        }
        title2="Twitter"
      />
    </View>
  );
};

export default SupportComp3;
