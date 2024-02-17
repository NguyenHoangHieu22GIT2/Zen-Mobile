import "../global.css";
import { SplashScreen, Stack } from "expo-router";
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
        name="(auth)/login"
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="(auth)/register"
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
      <Stack.Screen name="modal" options={{ presentation: "modal" }} />
    </Stack>
  );
}
