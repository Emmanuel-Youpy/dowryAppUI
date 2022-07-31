import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { Camera, CameraType } from "expo-camera";

const createOneButtonAlert = () =>
  Alert.alert("Pending....", "Will be made available shortly", [
    {
      text: "OK",
      style: "Ok",
    },
  ]);

export default function MerchantPayScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View
      style={{ justifyContent: "center", alignItems: "center", padding: 60 }}
    >
      <View>
        <Text>Scan Code</Text>
      </View>
      <View style={{ paddingTop: 30 }}>
        <View style={{ borderColor: "#0E60E2", borderWidth: 4 }}>
          <Camera style={{ height: 300, width: 300 }} type={type}>
            <View>
              {/* <TouchableOpacity
            style={{ width: 100, height: 14 }}
            onPress={() => {
              setType(
                type === CameraType.back ? CameraType.front : CameraType.back
              );
            }}
          >
            <Text> Flip </Text>
          </TouchableOpacity> */}
            </View>
          </Camera>
        </View>
      </View>
      <View style={{ paddingTop: 50, alignItems: "center" }}>
        <Text style={{ color: "gray" }}>
          Scan Merchant QR code to make payment
        </Text>
      </View>
    </View>
  );
}

// export default PayPhoneScreen;
