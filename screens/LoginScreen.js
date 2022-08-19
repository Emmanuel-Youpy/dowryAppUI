import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import constants from "../constants/constants";
import Walkthrough1 from "../component/Walkthrough1";
import Walkthrough2 from "../component/Walkthrough2";
import Walkthrough3 from "../component/WalkThrough3";
import Walkthrough4 from "../component/WalkThrough4";

const { width, height } = Dimensions.get("window");
const dark08Color = "rgba(13, 15, 35, 0.08)";
const primaryColor = "rgba(78, 85, 175, 1)";
const primaryColor08 = "rgba(78, 85, 175, 0.08)";

const LoginScreen = ({ navigation }) => {
  const [walkthrough2Animated, setWalkthrough2Animated] = useState(false);
  const onViewChangeRef = React.useRef(({ viewableItems, changed }) => {
    if (viewableItems[0].index == 1) {
      setWalkthrough2Animated(true);
    }
  });
  const scrollX = new Animated.Value(0);

  const Dots = () => {
    const dotPosition = Animated.divide(scrollX, width);
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {constants.walkthrough.map((item, index) => {
          // Animating the dots
          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [dark08Color, primaryColor, primaryColor08],
            extrapolate: "clamp",
          });
          return (
            <Animated.View
              key={`dot-${index}`}
              style={{
                borderRadius: 5,
                marginHorizontal: 6,
                width: 30,
                height: 2,
                backgroundColor: dotColor,
              }}
            />
          );
        })}
      </View>
    );
  };

  function renderFooter() {
    return (
      <View
        style={{
          // position: "absolute",
          // bottom: 0,
          // left: 0,
          // right: 0,
          height: height * 0.1,
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 10,
          marginTop: 10,
          paddingVertical: height > 700 ? 10 : 20,
        }}
      >
        <Dots />
      </View>
    );
  }

  return (
    <SafeAreaView>
      <View style={{ padding: 0, alignItems: "center" }}>
        <Animated.FlatList
          data={constants.walkthrough}
          keyExtractor={(item) => item.id}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          onViewableItemsChanged={onViewChangeRef.current}
          onScroll={Animated.event(
            [
              {
                nativeEvent: { contentOffset: { x: scrollX } },
              },
            ],
            {
              useNativeDriver: false,
            }
          )}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  width: width,
                  justifyContent: "center",
                  marginTop: 180,
                }}
              >
                {/* Walkthrough Images */}
                <View
                  style={{
                    // flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    height: 300,
                    top: -80,
                  }}
                >
                  {index == 0 && <Walkthrough1 />}
                  {index == 1 && <Walkthrough2 />}
                  {index == 2 && <Walkthrough3 />}
                  {index == 3 && <Walkthrough4 />}
                </View>

                {/* Title & Descriptions */}
                <View
                  style={{
                    // height: height * 0.1,
                    alignItems: "center",
                    justifyContent: "flex-start",
                    paddingHorizontal: 10,
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 20,
                      letterSpacing: 1,
                    }}
                  >
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      textAlign: "center",

                      color: "grey",
                    }}
                  >
                    {item.sub_title}
                  </Text>
                </View>
              </View>
            );
          }}
        />
        {renderFooter()}

        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <View
              style={{
                backgroundColor: "#0E60E2",
                width: 350,
                height: 60,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 15,
              }}
            >
              <Text style={{ color: "white", fontSize: 25 }}>REGISTER</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Logiin")}>
            <View
              style={{
                marginTop: 20,
                backgroundColor: "white",
                width: 350,
                height: 60,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 15,
                borderWidth: 1,
                borderColor: "#0E60E2",
              }}
            >
              <Text style={{ color: "black", fontSize: 25 }}>LOGIN</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
