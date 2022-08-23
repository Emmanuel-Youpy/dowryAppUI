import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const SIZES = { width, height };

const dots = [
  {
    id: 0,
    title: "",
  },
  {
    id: 1,
    title: "",
  },
];

const walkthrough = [
  {
    id: 0,
    title: "Pay For Trips With Ease",
    sub_title: "Scan busQR code with your mobile app to make payment",
  },
  {
    id: 1,
    title: "Wallet To Wallet Transfer",
    sub_title: "Easily transfer to other dowry users",
  },
  {
    id: 2,
    title: "Find Nearby Terminal",
    sub_title: "Locate Bus terminals closest to you",
  },
  {
    id: 3,
    title: "Easy Wallet Top-up",
    sub_title: "Top-up your wallet anywhere and anytime",
  },
];

export default { walkthrough, SIZES, dots };
