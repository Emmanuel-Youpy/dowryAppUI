import React from "react";
import { View, Text } from "react-native";

const QuickFeatures = ({ icon, title }) => {
  return (
    <View
      style={{
        backgroundColor: "#EAEFF2",
        width: 100,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
      }}
    >
      <Text>{icon}</Text>
      <Text style={{ marginTop: 14, fontSize: 12 }}>{title}</Text>
    </View>
  );
};

export default QuickFeatures;
