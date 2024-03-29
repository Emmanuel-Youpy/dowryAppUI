import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import LoginScreens from "./screens/LoginScreens";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LogiinScreen from "./screens/LogiinScreen";
import MyTabs from "./navigation/MyTabs";
import CardTransaction from "./screens/CardTransaction";
import WalletTransactions from "./screens/WalletTransactions";
import HistoryScreen from "./screens/HistoryScreen";
import HomeModeScreen from "./screens/HomeModeScreen";
import PayPhoneScreen from "./screens/PayPhoneScreen";
import TransferScreen from "./screens/TransferScreen";
import MapScreen from "./screens/MapScreen";
import RedeemTicketScreen from "./screens/RedeemTicketScreen";
import TrafficReport from "./screens/TrafficReport";
import BankLog from "./screens/BankLog";
import AirtimeScreen from "./screens/AirtimeScreen";
import InterStateScreen from "./screens/InterStateScreen";
import BookingTransaction from "./screens/BookingTransaction";
import MerchantPayScreen from "./screens/MerchantPayScreen";
import CharterScreen from "./screens/CharterScreen";

const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ title: "Overview" }}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Mytabs"
          component={MyTabs}
          options={{ title: "Overview" }}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Logiin"
          component={LogiinScreen}
          options={{ title: "Overview" }}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Card Transactions"
          component={CardTransaction}
          options={{ title: "Overview" }}
          options={
            {
              // headerShown: false,
            }
          }
        />
        <Stack.Screen
          name="Wallet Transactions"
          component={WalletTransactions}
          options={{ title: "Overview" }}
          options={
            {
              // headerShown: false,
            }
          }
        />
        <Stack.Screen
          name="History"
          component={HistoryScreen}
          options={{ title: "Overview" }}
          options={
            {
              // headerShown: false,
            }
          }
        />
        <Stack.Screen
          name="HomeMode"
          component={HomeModeScreen}
          options={{
            headerShown: false,
            presentation: "modal",
          }}
        />
        <Stack.Screen
          name="PayPhone"
          component={PayPhoneScreen}
          options={
            {
              // headerShown: false,
            }
          }
        />
        <Stack.Screen
          name="Transfer"
          component={TransferScreen}
          options={
            {
              // headerShown: false,
            }
          }
        />
        <Stack.Screen
          name="Map"
          component={MapScreen}
          options={
            {
              // headerShown: false,
            }
          }
        />
        <Stack.Screen
          name="Ticket"
          component={RedeemTicketScreen}
          options={
            {
              // headerShown: false,
            }
          }
        />
        <Stack.Screen
          name="Traffic"
          component={TrafficReport}
          options={
            {
              // headerShown: false,
            }
          }
        />
        <Stack.Screen
          name="Bank Log"
          component={BankLog}
          options={
            {
              // headerShown: false,
            }
          }
        />
        <Stack.Screen
          name="Airtime"
          component={AirtimeScreen}
          options={
            {
              // headerShown: false,
            }
          }
        />
        <Stack.Screen
          name="InterState"
          component={InterStateScreen}
          options={
            {
              // headerShown: false,
            }
          }
        />
        <Stack.Screen
          name="Booking"
          component={BookingTransaction}
          options={
            {
              // headerShown: false,
            }
          }
        />
        <Stack.Screen
          name="Merchant"
          component={MerchantPayScreen}
          options={
            {
              // headerShown: false,
            }
          }
        />
        <Stack.Screen
          name="Charter"
          component={CharterScreen}
          options={
            {
              // headerShown: false,
            }
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
