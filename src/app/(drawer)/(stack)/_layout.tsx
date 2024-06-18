import { View, Text } from "react-native";
import { Stack } from "expo-router";
import DrawerOpenIcon from "@/components/layout/DrawerOpenIcon";
import { IMAGES } from "@/constants";
import { Host } from "react-native-portalize";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { useAuthStore } from "@/libs/zustand/auth.zustand";

export default function StackLayout() {
  const endUser = useAuthStore((state) => state.endUser);
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
              headerLeft: () => (
                <DrawerOpenIcon
                  source={
                    endUser.avatar.length < 8
                      ? IMAGES.fakeavatar
                      : {
                          uri:
                            process.env.EXPO_PUBLIC_HTTP_UPLOADS +
                            endUser.avatar
                        }
                  }
                />
              )
            }}
          />
          <Stack.Screen
            name="post/create"
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="post/[id]/edit"
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="profile/[id]/index"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="profile/edit"
            options={{ title: "Edit Profile" }}
          />
          <Stack.Screen
            name="profile/[id]/friends"
            options={{ title: "Friends" }}
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
            name="group/[id]/edit"
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
          <Stack.Screen
            name="friend-request"
            options={{ headerShown: true, title: "Friend request" }}
          />
          <Stack.Screen
            name="upgrade-plan"
            options={{ headerShown: true, headerTitle: "" }}
          />
          <Stack.Screen name="favourites" />
          <Stack.Screen name="setting" />
        </Stack>
      </BottomSheetModalProvider>
    </Host>
  );
}
