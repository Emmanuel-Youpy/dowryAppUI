import React from "react";
import { View, Text } from "react-native";
import CarouselItem from "./CarouselItem";
import { dummyData } from "../constants/carousel";

const Carousell = () => {
  return (
    <View>
      <CarouselItem data={dummyData} />
    </View>
  );
};

export default Carousell;
