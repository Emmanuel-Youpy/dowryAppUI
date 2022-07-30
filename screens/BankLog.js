import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const createOneButtonAlert = () =>
  Alert.alert("Pending....", "Will be made available shortly", [
    {
      text: "OK",
      style: "Ok",
    },
  ]);

const BankLog = () => {
  return (
    <View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            width: "90%",
            backgroundColor: "#0E60E2",
            height: 170,
            borderRadius: 10,
            marginTop: 30,
            alignItems: "center",
          }}
        >
          <View style={{ padding: 25, alignItems: "center", paddingTop: 50 }}>
            <Text style={{ color: "white", fontSize: 18 }}>Wallet Balance</Text>
            <Text style={{ color: "white", fontSize: 18, paddingTop: 10 }}>
              0.00
            </Text>
          </View>
        </View>
      </View>
      <View style={{ padding: 20 }}>
        <View style={{ marginTop: 0 }}>
          <Text style={{ fontWeight: "bold" }}>Recent Transactions</Text>
        </View>
        <View style={{ paddingTop: 10, alignItems: "center" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
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
              <Text>18 july 2022</Text>
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
        </View>
      </View>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#E5E4E2",
            width: "90%",
            padding: 10,
            alignItems: "center",
            borderRadius: 10,
            backgroundColor: "#0E60E2",
          }}
          onPress={createOneButtonAlert}
        >
          <Text style={{ color: "white" }}>GET</Text>
        </TouchableOpacity>
      </View>
      <View style={{ paddingTop: 10, alignItems: "center" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "90%",
            paddingTop: 10,
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
            <Text>All</Text>
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
            <Text>Credits</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            paddingTop: 40,
            alignItems: "center",
            width: "80%",
            justifyContent: "center",
          }}
        >
          <MaterialCommunityIcons name="bridge" size={65} color="#0E60E2" />
          <Text style={{ fontWeight: "600" }}>No transactions yet</Text>
          <Text style={{ textAlign: "center", color: "gray", paddingTop: 10 }}>
            Your transactions appears here when you fund your topup your wallet
          </Text>
        </View>
      </View>
    </View>
  );
};

export default BankLog;
