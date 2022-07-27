import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const TransactionSubs = ({ icon2, title2, onPress }) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          padding: 20,
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Text>{icon2}</Text>
        {/* <FontAwesome name="question-circle-o" size={24} color="gray" /> */}

        <Text style={{ paddingLeft: 12 }}>{title2}</Text>
      </View>
      <TouchableOpacity style={{ paddingRight: 12 }} onPress={onPress}>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

const TransactionScreen = ({ navigation }) => {
  return (
    <View style={{ padding: 0 }}>
      <View style={{ padding: 20 }}>
        <Text style={{ fontWeight: "bold", fontSize: 17 }}>
          All Transactions
        </Text>
      </View>
      <View>
        <TransactionSubs
          icon2={<EvilIcons name="credit-card" size={34} color="#0E60E2" />}
          title2="Card Transactions"
          onPress={() => navigation.navigate("Card Transactions")}
        />
      </View>
      <View style={{ top: 40 }}>
        <TransactionSubs
          icon2={
            <Ionicons name="md-wallet-outline" size={34} color="#0E60E2" />
          }
          title2="Wallet Transactions"
          onPress={() => navigation.navigate("Wallet Transactions")}
        />
      </View>
      <View style={{ top: 80 }}>
        <TransactionSubs
          icon2={<FontAwesome name="history" size={34} color="#0E60E2" />}
          title2="Bus History"
        />
      </View>
    </View>
  );
};

export default TransactionScreen;
