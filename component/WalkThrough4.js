import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Walkthrough4 = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <Image
        source={require("../assets/images/loading1.png")}
        style={{
          width: 300,
          height: 300,
        }}
      />
    </View>
  );
};

export default Walkthrough4;

const styles = StyleSheet.create({});
