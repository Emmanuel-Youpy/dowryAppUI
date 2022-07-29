import React from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";

const createOneButtonAlert = () =>
  Alert.alert("Pending....", "Will be made available shortly", [
    {
      text: "OK",
      style: "Ok",
    },
  ]);

const TransferScreen = () => {
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
          <Text>Amount</Text>
          <View>
            <TextInput
              style={{
                height: 50,
                width: 390,
                margin: 12,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: "gray",
                padding: 10,
                left: -13,
              }}
              placeholder="Amount"
              keyboardType="numeric"
              onChangeText={(value) => this.setState({ number: value })}
            />
          </View>
          <Text style={{ paddingTop: 30 }}>Beneficiary Phone Number</Text>

          <View>
            <TextInput
              style={{
                height: 50,
                width: 390,
                margin: 12,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: "gray",
                padding: 10,
                left: -13,
              }}
              placeholder="Amount"
              keyboardType="numeric"
              onChangeText={(value) => this.setState({ number: value })}
            />
          </View>
          <View style={{ paddingTop: 20 }}>
            <TouchableOpacity
              onPress={createOneButtonAlert}
              // onPress={() => this.making_call}
              style={{
                height: 50,
                width: 390,
                margin: 12,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: "gray",
                padding: 10,
                left: -13,
                backgroundColor: "#0E60E2",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white", fontSize: 18 }}>PROCEED</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TransferScreen;
