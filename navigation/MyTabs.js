import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SettingScreen from "../screens/SettingScreen";
import HomeNav from "./HomeNav";
import TabIcons from "./TabIcons";
import icons from "../constants/icons";
import Ionicons from "react-native-vector-icons/Ionicons";
import SupportScreen from "../screens/SupportScreen";
import TransactionScreen from "../screens/TransactionScreen";
import NotificationScreen from "../screens/NotificationScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // headerShown: false,

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Support") {
            iconName = focused ? "ios-call-outline" : "ios-call-outline";
          } else if (route.name === "Transaction") {
            iconName = focused ? "ios-book-outline" : "ios-book-outline";
          } else if (route.name === "Notification") {
            iconName = focused ? "notifications" : "notifications";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#0E60E2",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Support" component={SupportScreen} />
      <Tab.Screen name="Transaction" component={TransactionScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs;
