import React from "react";
import { View, Text } from "react-native";

const Paginator = ({ data }) => {
  return (
    <View style={{ flexDirection: "row", height: 64 }}>
      {data.map((_, i) => {
        return (
          <View
            style={{
              height: 10,
              borderRadius: 5,
              backgroundColor: "#493d8a",
              width: 10,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
};

export default Paginator;
