import { View, Text } from "react-native";
import { Stack } from "expo-router";
import DrawerOpenIcon from "@/components/layout/DrawerOpenIcon";
import { IMAGES } from "@/constants";
import { Host } from "react-native-portalize";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

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
            name="post/create"
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen name="profile/[id]" options={{ headerShown: false }} />
          <Stack.Screen
            name="profile/edit"
            options={{ title: "Edit Profile" }}
          />
          <Stack.Screen
            name="conversation/[id]"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="group/[id]/index"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="group/[id]/members"
            options={{ headerShown: true, title: "Members" }}
          />
          <Stack.Screen
            name="group/[id]/create-post"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="group/create" options={{ headerShown: false }} />
          <Stack.Screen name="favourites" />
          <Stack.Screen name="setting" />
        </Stack>
      </BottomSheetModalProvider>
    </Host>
  );
}
