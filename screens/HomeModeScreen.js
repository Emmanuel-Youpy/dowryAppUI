import React, { useState } from "react";
import { View, Text, Button, TouchableOpacity, Alert } from "react-native";
import { CheckBox, Icon } from "@rneui/themed";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

let CheckboxComponentProps = {};

const createOneButtonAlert = () =>
  Alert.alert("Pending....", "Will be made available shortly", [
    {
      text: "OK",
      style: "Ok",
    },
  ]);

const HomeModeScreen = () => {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  return (
    <View style={{ justifyContent: "center", padding: 30 }}>
      <View
        style={{
          marginLeft: 15,
          paddingBottom: 20,
          paddingTop: 20,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          Choose mode of payment
        </Text>
        <View style={{ paddingTop: 15, paddingBottom: 15 }}>
          <Text style={{ color: "gray" }}>
            Tap any of the option below to top-up wallet immediately
          </Text>
        </View>
      </View>
      <View
        style={{
          display: "center",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          backgroundColor: "lightgray",
          borderRadius: 10,
          marginBottom: 15,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 15,
          }}
        >
          <FontAwesome name="bank" size={18} color="#0E60E2" />
          <Text style={{ paddingLeft: 10, fontWeight: "bold" }}>
            Bank Transfer
          </Text>
        </View>
        <CheckBox
          center
          // title="Click Here"
          checked={check1}
          onPress={() => setCheck1(!check1)}
          containerStyle={{
            backgroundColor: "lightgray",
          }}
        />
      </View>
      <View
        style={{
          display: "center",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          backgroundColor: "lightgray",
          borderRadius: 10,
          marginBottom: 15,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 15,
          }}
        >
          <FontAwesome5 name="cc-mastercard" size={18} color="#0E60E2" />
          <Text style={{ paddingLeft: 10, fontWeight: "bold" }}>
            Pay With Mastercard
          </Text>
        </View>
        <CheckBox
          center
          // title="Click Here"
          checked={check2}
          onPress={() => setCheck2(!check2)}
          containerStyle={{
            backgroundColor: "lightgray",
          }}
        />
      </View>
      <View
        style={{
          display: "center",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          backgroundColor: "lightgray",
          borderRadius: 10,
          marginBottom: 15,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 15,
          }}
        >
          <FontAwesome5 name="stripe-s" size={16} color="#0E60E2" />
          <Text style={{ paddingLeft: 10, fontWeight: "bold" }}>
            Stripe Bank Wallet
          </Text>
        </View>
        <CheckBox
          center
          // title="Click Here"
          checked={check3}
          onPress={() => setCheck3(!check3)}
          containerStyle={{
            backgroundColor: "lightgray",
          }}
        />
      </View>
      <View
        style={{
          display: "center",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          backgroundColor: "lightgray",
          borderRadius: 10,
          marginBottom: 15,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 15,
          }}
        >
          <Entypo name="paypal" size={18} color="#0E60E2" />
          <Text style={{ paddingLeft: 10, fontWeight: "bold" }}>
            Bank Transfer
          </Text>
        </View>
        <CheckBox
          center
          // title="Click Here"
          checked={check4}
          onPress={() => setCheck4(!check4)}
          containerStyle={{
            backgroundColor: "lightgray",
          }}
        />
      </View>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#0E60E2",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
          borderRadius: 10,
        }}
        onPress={createOneButtonAlert}
      >
        <Text style={{ paddingLeft: 10, fontSize: 16, color: "white" }}>
          PROCEED
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeModeScreen;
