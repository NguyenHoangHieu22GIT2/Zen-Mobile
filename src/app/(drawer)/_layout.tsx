import { View, Image } from "react-native";
import { Drawer } from "expo-router/drawer";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Redirect } from "expo-router";
import CustomDrawerItem from "@/components/layout/CustomDrawerItem";
import { FontText } from "@/components";
//stole from somewhere..
//feel free to adjust the file!!
const CustomDrawerContent = (props) => {
  const isAuth = true;

  if (!isAuth) {
    return <Redirect href={"/"} />;
  } else
    return (
      <DrawerContentScrollView {...props}>
        <View className="flex-row p-4 py-6 items-center gap-3">
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/women/26.jpg" }}
            style={{ width: 70, height: 70 }}
            className="rounded-full"
          />
          <View className="gap-1 ">
            <FontText className="font-bold text-xl">John Doe</FontText>
            <FontText className="text-gray-500">john@email.com</FontText>
          </View>
        </View>
        <View className="flex-row gap-3 px-4 mb-6">
          <View className="flex-row items-center gap-1">
            <FontText className="font-bold">80</FontText>
            <FontText className="text-gray-500">Following</FontText>
          </View>
          <View className="flex-row items-center gap-1">
            <FontText className="font-bold">100</FontText>
            <FontText className="text-gray-500">Followers</FontText>
          </View>
        </View>
        <CustomDrawerItem
          FontAwesomeIconName="home"
          label="Home"
          pathname="/popular"
        />
        <CustomDrawerItem
          FontAwesomeIconName="user"
          label="Profile"
          pathname={`/profile/${123}`}
        />
        <CustomDrawerItem
          FontAwesomeIconName="gear"
          label="Setting"
          pathname="/setting"
        />
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
