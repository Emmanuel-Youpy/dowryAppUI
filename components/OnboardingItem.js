import React from "react";
import { View, Text, Image, useWindowDimensions } from "react-native";

const OnboardingItem = ({ item }) => {
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        width,
        justifyContent: "center",
        alignItems: "center",
        height: "120%",
        backgroundColor: "red",
      }}
    >
      <Image source={item.image} style={{ width: "50%" }} />
      <View style={{ top: 50 }}>
        <Text
          style={{
            fontWeight: "800",
            fontSize: 28,
            marginBottom: 10,
            color: "#493d8a",
            textAlign: "center",
          }}
        >
          {item.title}
        </Text>
        <Text
          style={{
            fontWeight: "300",
            color: "#62656b",
            textAlign: "center",
            paddingHorizontal: 64,
          }}
        >
          {item.desc}
        </Text>
      </View>
    </View>
  );
};

export default OnboardingItem;
