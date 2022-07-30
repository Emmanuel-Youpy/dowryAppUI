import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const createOneButtonAlert = () =>
  Alert.alert("Pending....", "Will be made available shortly", [
    {
      text: "OK",
      style: "Ok",
    },
  ]);

const BookingTransaction = () => {
  return (
    <View>
      <View style={{ justifyContent: "center", alignItems: "center" }}></View>
      <View style={{ padding: 20 }}>
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
            paddingTop: 30,
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
            <Text>Unused Tickets</Text>
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
            <Text>Used Tickets</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            paddingTop: 170,
            alignItems: "center",
            width: "80%",
            justifyContent: "center",
          }}
        >
          <MaterialCommunityIcons name="bridge" size={65} color="#0E60E2" />
          <Text style={{ fontWeight: "600" }}>No transactions yet</Text>
        </View>
      </View>
    </View>
  );
};

export default BookingTransaction;
