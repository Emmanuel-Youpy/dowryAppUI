import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CardTransaction = ({ navigation }) => {
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
        <View
          style={{
            top: 25,
            paddingLeft: 22,
            paddingRight: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "white", fontSize: 18 }}>Dowry</Text>
          <Text style={{ color: "white" }}>LAGOS TRAVEL CARD</Text>
        </View>
        <View style={{ padding: 25 }}>
          <Text style={{ color: "white", fontSize: 18, paddingTop: 20 }}>
            <FontAwesome name="dollar" size={18} color="white" />
            0.00
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: 40,
            }}
          >
            <Text style={{ color: "white", fontSize: 10 }}>Card Balance</Text>
            <Text style={{ color: "white", fontSize: 10 }}>FE11870F</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "90%",
          paddingTop: 30,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#E5E4E2",
            width: "50%",
            padding: 10,
            alignItems: "center",
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
          }}
        >
          <Text>20 july 2022</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            width: "50%",
            padding: 10,
            alignItems: "center",
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
          }}
        >
          <Text>20 july 2022</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          paddingTop: 20,
          width: "113%",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#E5E4E2",
            width: "80%",
            padding: 10,
            alignItems: "center",
            borderRadius: 10,
            paddingTop: 10,
            backgroundColor: "#0E60E2",
          }}
        >
          <Text style={{ color: "white" }}>GET</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "89%",
          paddingRight: 125,
          paddingTop: 20,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            width: "50%",
            padding: 10,
            alignItems: "center",
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
          }}
        >
          <Text style={{ color: "#0E60E2" }}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#E5E4E2",
            width: "50%",
            padding: 10,
            alignItems: "center",
            borderColor: "gray",
            borderWidth: 0.2,
          }}
        >
          <Text>Credits</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#E5E4E2",
            width: "50%",
            padding: 10,
            alignItems: "center",
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
          }}
        >
          <Text>Debit</Text>
        </TouchableOpacity>
      </View>
      <View style={{ paddingTop: 20, alignItems: "center" }}>
        <MaterialCommunityIcons name="bridge" size={65} color="#0E60E2" />
        <Text style={{ fontWeight: "600" }}>No transactions yet</Text>
      </View>
    </View>
  );
};

export default CardTransaction;
