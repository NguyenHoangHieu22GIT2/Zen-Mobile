import { View, Text } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { SplashScreen } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function useFontLoader() {
  const [loaded, error] = useFonts({
    AirBnbRegular: require("../assets/fonts/AirbnbCereal_W_Bk.otf"),
    AirBnbMedium: require("../assets/fonts/AirbnbCereal_W_Bd.otf"),
    AirBnbBold: require("../assets/fonts/AirbnbCereal_W_Blk.otf"),
    ...FontAwesome.font
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(
    () => {
      if (error) throw error;
    },
    [error]
  );

  useEffect(
    () => {
      if (loaded) {
        SplashScreen.hideAsync();
      }
    },
    [loaded]
  );
  return { loaded };
}
