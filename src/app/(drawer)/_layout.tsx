import { View, Image } from "react-native";
import { Drawer } from "expo-router/drawer";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Redirect, router } from "expo-router";
import CustomDrawerItem from "@/components/layout/CustomDrawerItem";
import { FontText } from "@/components";
import { useAuthStore } from "@/libs/zustand/auth.zustand";
import { IMAGES } from "@/constants";

const CustomDrawerContent = (props) => {
  const endUser = useAuthStore((state) => state.endUser);
  const isAuth = true;

  if (!isAuth) {
    return <Redirect href={"/"} />;
  } else
    return (
      <DrawerContentScrollView {...props}>
        <View className="flex-row p-4 py-6 items-center gap-3">
          <Image
            source={
              endUser.avatar?.length > 8
                ? { uri: process.env.EXPO_PUBLIC_HTTP_UPLOADS + endUser.avatar }
                : IMAGES.fakeavatar
            }
            style={{ width: 70, height: 70 }}
            className="rounded-full"
          />
          <View className="gap-1 ">
            <FontText className="font-bold text-xl">
              {endUser.username}
            </FontText>
            <FontText className="text-gray-500">{endUser.email}</FontText>
          </View>
        </View>
        {/* <View className="flex-row gap-3 px-4 mb-6">
          <View className="flex-row items-center gap-1">
            <FontText className="font-bold">2</FontText>
            <FontText className="text-gray-500">Friends</FontText>
          </View>
          <View className="flex-row items-center gap-1">
            <FontText className="font-bold">100</FontText>
            <FontText className="text-gray-500">Followers</FontText>
          </View>
        </View> */}
        <CustomDrawerItem
          FontAwesomeIconName="home"
          label="Home"
          pathname="/popular"
        />
        <CustomDrawerItem
          FontAwesomeIconName="user"
          label="Profile"
          pathname={`/profile/${endUser._id}`}
        />
        <CustomDrawerItem
          FontAwesomeIconName="gear"
          label="Setting"
          pathname="/setting"
        />
        <CustomDrawerItem
          FontAwesomeIconName="star"
          label="Upgrade Plan"
          pathname="/upgrade-plan"
        />
        <View className="flex-1 justify-end">
          <CustomDrawerItem
            FontAwesomeIconName="sign-out"
            label="Log out"
            pathname=""
            onPress={() => {
              router.push("login");
            }}
          />
        </View>
      </DrawerContentScrollView>
    );
};

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="(stack)" />
    </Drawer>
  );
}
