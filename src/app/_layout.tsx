import { View } from "react-native";
import "../global.css";
import { Slot } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Layout() {
  return <Slot />;
}
