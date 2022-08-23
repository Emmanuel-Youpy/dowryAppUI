import React from "react";
import { View, Text } from "react-native";

const BannerSlider2 = () => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          width: "90%",
          backgroundColor: "#0E60E2",
          height: 170,
          borderRadius: 10,
          marginTop: 30,
        }}
      >
        <View style={{ padding: 25 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ color: "white", fontSize: 18 }}>DOJ Card</Text>
            <Text style={{ color: "white", fontSize: 16 }}>FE11870F</Text>
          </View>
          <Text style={{ color: "white", fontSize: 18, paddingTop: 20 }}>
            $0.00
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: 40,
            }}
          >
            <Text style={{ color: "white", fontSize: 10 }}>20 july 2022</Text>
            <Text style={{ color: "white", fontSize: 10 }}>05:23pm</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BannerSlider2;
