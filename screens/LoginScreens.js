import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
} from "react-native";

const { width, height } = Dimensions.get("window");

const LoginScreens = ({ item }) => {
  return (
    <SafeAreaView>
      <View style={styles.cardView}>
        <Image style={styles.image} source={{ uri: item.image }} />
        <View style={styles.textView}>
          <Text>{item.title}</Text>
          <Text>{item.desc}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cardView: {
    // flex: 1,
    width: width - 20,
    height: height / 3,
    backgroundColor: "white",
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  textView: {
    position: "absolute",
    bottom: 10,
    margin: 10,
    left: 5,
  },
  image: {
    width: width - 20,
    height: height / 3,
    borderRadius: 10,
  },
  itemTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default LoginScreens;
