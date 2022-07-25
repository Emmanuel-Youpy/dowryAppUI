import React from "react";
import { View, Text, Image } from "react-native";

const TabIcons = ({ focused, icon }) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        height: 80,
        width: 50,
      }}
    >
      <Image
        source={icon}
        reseizeMode="contain"
        style={{
          width: 30,
          height: 30,
          tintColor: focused ? "red" : "green",
        }}
      />
      {focused && (
        <View
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: 5,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            backgroundColor: "orange",
          }}
        />
      )}
    </View>
  );
};

export default TabIcons;
