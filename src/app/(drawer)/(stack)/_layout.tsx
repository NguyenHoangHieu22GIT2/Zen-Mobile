import { View, Text } from "react-native";
import { Stack } from "expo-router";
import DrawerOpenIcon from "@/components/layout/DrawerOpenIcon";
import { IMAGES } from "@/constants";
import { Host } from "react-native-portalize";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

//the reason why i use stack here is base on twitter navigation's feeling
//all the feed details, settings, favourites,.. will be seperate from the nav-tab
export default function StackLayout() {
  return (
    <Host>
      <BottomSheetModalProvider>
        <Stack
          screenOptions={{
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerShown: true
          }}
        >
          <Stack.Screen
            name="(nav-tabs)"
            options={{
              headerBackVisible: false,
              headerTitle: () => (
                <View>
                  <Text className="text-xl font-bold">Zen</Text>
                </View>
              ),
              headerLeft: () => <DrawerOpenIcon source={IMAGES.fakeavatar} />
            }}
          />
          <Stack.Screen
            name="add-post"
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen name="profile/[id]" options={{ headerShown: false }} />
          <Stack.Screen
            name="profile/edit"
            options={{ title: "Edit Profile" }}
          />
          <Stack.Screen name="details" />
          <Stack.Screen name="favourites" />
          <Stack.Screen name="setting" />
        </Stack>
      </BottomSheetModalProvider>
    </Host>
  );
}
