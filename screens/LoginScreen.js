import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import Onboarding from "../components/Onboarding";
// const carouselItem = require("../assets/carousel.json");
// import { SliderBox } from "react-native-image-slider-box";

// interface CarouselItems {
//     title: string;
//     desc:string;
//     uri:string;
// }

const LoginScreen = () => {
  return (
    <SafeAreaView
    //   style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Onboarding />
      <View>
        <Text>Logifffdn</Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
