import React, { useRef } from "react";
import { View, Button, Text } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";

export default function BottomSheet() {
  const refRBSheet = useRef();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Button
        title="OPEN BOTTOM SHEET"
        onPress={() => refRBSheet.current.open()}
      />
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent",
            // height: 900,
          },
          draggableIcon: {
            backgroundColor: "#000",
          },
        }}
      >
        <Text>Okat</Text>
        <Text>Okat</Text>
        <Text>Okat</Text>
        <Text>Okat</Text>
        <Text>Okat</Text>
        <Text>Okat</Text>
        <Text>Okat</Text>
        <Text>Okat</Text>
        <Text>Okat</Text>
        <Text>Okat</Text>
        <Text>Okat</Text>
        <Text>Okat</Text>
        <Text>Okat</Text>
        <Text>Okat</Text>
        <Text>Okat</Text>
      </RBSheet>
    </View>
  );
}
