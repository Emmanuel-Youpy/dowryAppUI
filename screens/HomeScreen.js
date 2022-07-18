import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { UserIcon } from "@heroicons/react/solid";
import { FontAwesome } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import QuickFeatures from "../components/QuickFeatures";
const HomeScreen = () => {
  function renderHeader() {
    return (
      <View
        style={{
          paddingTop: 10,
          margin: 15,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 20 }}>
          Hello <Text style={{ fontWeight: "bold", fontSize: 20 }}>Youpil</Text>
        </Text>
        <FontAwesome name="user-circle" size={45} color="#0E60E2" />
      </View>
    );
  }

  function renderBanner() {
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
          <View style={{ padding: 25 }}>
            <Text style={{ color: "white", fontSize: 18 }}>Wallet Balance</Text>
            <Text style={{ color: "white", fontSize: 18, paddingTop: 20 }}>
              43,000.00
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingTop: 40,
              }}
            >
              <Text style={{ color: "white", fontSize: 10 }}>20 july 2022</Text>
              <Text style={{ color: "white", fontSize: 10 }}>05:23pm</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
  const Tag = ({ title, icon }) => {
    return (
      <View>
        <Text>{title}</Text>
        <Text>{icon}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView>
      {/* Header */}
      <View>
        {renderHeader()}
        {renderBanner()}
        {/* Tags */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{
              paddingTop: 10,
              margin: 20,
              backgroundColor: "gray",
              width: "40%",
              padding: 15,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 15,
              backgroundColor: "#cefad0",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text>Top Wallet</Text>
            <Fontisto name="wallet" size={20} color="green" />
          </TouchableOpacity>
          {/* 2 */}
          <TouchableOpacity
            style={{
              paddingTop: 10,
              margin: 20,
              backgroundColor: "gray",
              width: "40%",
              padding: 15,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 15,
              backgroundColor: "#FFE0DA",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text>Pay With Phone</Text>
            <Ionicons name="phone-portrait-sharp" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              padding: 25,
            }}
          >
            Quick Features
          </Text>
          <View
            style={{
              margin: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <QuickFeatures
              icon={
                <Ionicons name="phone-portrait-sharp" size={24} color="black" />
              }
              title="Transfer"
            />
            <QuickFeatures
              icon={
                <Ionicons name="phone-portrait-sharp" size={24} color="black" />
              }
              title="Transfer"
            />
            <QuickFeatures
              icon={
                <Ionicons name="phone-portrait-sharp" size={24} color="black" />
              }
              title="Transfer"
            />
          </View>
          {/* pt2 */}
          <View
            style={{
              margin: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <QuickFeatures
              icon={
                <Ionicons name="phone-portrait-sharp" size={24} color="black" />
              }
              title="Transfer"
            />
            <QuickFeatures
              icon={
                <Ionicons name="phone-portrait-sharp" size={24} color="black" />
              }
              title="Transfer"
            />
            <QuickFeatures
              icon={
                <Ionicons name="phone-portrait-sharp" size={24} color="black" />
              }
              title="Transfer"
            />
          </View>
        </View>
      </View>
      {/* Banner */}
    </SafeAreaView>
  );
};

export default HomeScreen;
