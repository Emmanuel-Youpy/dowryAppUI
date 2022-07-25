import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Divider, useTheme } from "@rneui/themed";

const SupportComp2 = ({ icon, title, header, icon2 }) => {
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
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            padding: 20,
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Text>{icon}</Text>
          {/* <FontAwesome name="question-circle-o" size={24} color="gray" /> */}

          <Text style={{ paddingLeft: 12 }}>{title}</Text>
        </TouchableOpacity>
        <View style={{ paddingRight: 22 }}>
          <Text style={{ color: "gray" }}>{icon2}</Text>
        </View>
      </View>
      <Divider />
    </View>
  );
};

export default SupportComp2;
