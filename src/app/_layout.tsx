import { View } from "react-native";
import "../global.css";
import { Slot, SplashScreen, Stack } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useFontLoader from "../hook/useFontLoader";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const { loaded } = useFontLoader();

  if (!loaded) {
    return null;
  }
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="(auth)/sign-up"
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="(auth)/sign-in"
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
      <Stack.Screen name="modal" options={{ presentation: "modal" }} />
    </Stack>
  );
}
