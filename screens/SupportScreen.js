import React from "react";
import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import SupportComp from "../component/SupportComp";
import { Divider, useTheme } from "@rneui/themed";
import SupportComp2 from "../component/SupportComp2";
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SupportComp3 from "../component/SupportComp3";

const SupportScreen = () => {
  return (
    <View>
      <SupportComp
        header="Support"
        title="FAQ"
        icon={
          <FontAwesome name="question-circle-o" size={24} color="#0E60E2" />
        }
      />
      <View style={{ paddingTop: 10 }}>
        <SupportComp2
          header="Call Center"
          icon={<SimpleLineIcons name="call-in" size={24} color="#0E60E2" />}
          title="+23478907642"
          icon2="copy"
        />
      </View>
      <View style={{ paddingTop: 10 }}>
        <SupportComp2
          header="Email"
          icon={
            <MaterialCommunityIcons
              name="email-variant"
              size={24}
              color="#0E60E2"
            />
          }
          title="youpil@gmail.com"
        />
      </View>
      <View style={{ paddingTop: 10 }}>
        <SupportComp3 header="Social Media" />
      </View>
    </View>
  );
};

export default SupportScreen;
