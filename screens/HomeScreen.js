import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Touchable,
} from "react-native";
import { UserIcon } from "@heroicons/react/solid";
import { FontAwesome } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import QuickFeatures from "../component/QuickFeatures";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import Home from "./Home";

const HomeScreen = ({ navigation }) => {
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
      <ScrollView showsVerticalScrollIndicator={false}>
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
              onPress={() => navigation.navigate("HomeMode")}
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
              onPress={() => navigation.navigate("PayPhone")}
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
              <TouchableOpacity onPress={() => navigation.navigate("Transfer")}>
                <QuickFeatures
                  icon={
                    <MaterialCommunityIcons
                      name="bank-transfer"
                      size={35}
                      color="#0E60E2"
                    />
                  }
                  title="Transfer"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Map")}>
                <QuickFeatures
                  icon={
                    <MaterialCommunityIcons
                      name="map-marker-radius-outline"
                      size={35}
                      color="#0E60E2"
                    />
                  }
                  title="Map"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Ticket")}>
                <QuickFeatures
                  icon={
                    <MaterialCommunityIcons
                      name="ticket-percent-outline"
                      size={35}
                      color="#0E60E2"
                    />
                  }
                  title="Redeem Tickets"
                />
              </TouchableOpacity>
            </View>
            {/* pt2 */}
            <View
              style={{
                margin: 20,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity onPress={() => navigation.navigate("History")}>
                <QuickFeatures
                  icon={
                    <MaterialCommunityIcons
                      name="history"
                      size={35}
                      color="#0E60E2"
                    />
                  }
                  title="History"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Traffic")}>
                <QuickFeatures
                  icon={
                    <MaterialIcons
                      name="sticky-note-2"
                      size={35}
                      color="#0E60E2"
                    />
                  }
                  title="Traffic Report"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Bank Log")}>
                <QuickFeatures
                  icon={
                    <MaterialIcons
                      name="compare-arrows"
                      size={35}
                      color="#0E60E2"
                    />
                  }
                  title="Bank Log"
                />
              </TouchableOpacity>
            </View>
          </View>
          {/* Banner */}
          <View style={{ padding: 20, alignItems: "center" }}>
            <TouchableOpacity>
              <Image
                style={{ height: 70, width: 370, borderRadius: 10 }}
                source={{
                  uri:
                    "https://www.wordstream.com/wp-content/uploads/2021/07/banner-ads-examples-ncino.jpg",
                }}
              />
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
              Other Services
            </Text>
            <View
              style={{
                margin: 20,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity onPress={() => navigation.navigate("Airtime")}>
                <QuickFeatures
                  icon={
                    <MaterialIcons
                      name="phone-android"
                      size={35}
                      color="#0E60E2"
                    />
                  }
                  title="Buy Airtime"
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("InterState")}
              >
                <QuickFeatures
                  icon={
                    <FontAwesome name="calendar" size={35} color="#0E60E2" />
                  }
                  title="Inter State"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <QuickFeatures
                  icon={
                    <FontAwesome5
                      name="money-bill-wave"
                      size={35}
                      color="#0E60E2"
                    />
                  }
                  title="Merchant Pay"
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                margin: 20,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity>
                <QuickFeatures
                  icon={
                    <FontAwesome5
                      name="calendar-day"
                      size={35}
                      color="#0E60E2"
                    />
                  }
                  title="Transfer"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
