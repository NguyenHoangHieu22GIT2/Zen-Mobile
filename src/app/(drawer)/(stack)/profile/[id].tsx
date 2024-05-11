import {
  AddUserSVG,
  CommentSVG,
  FontText,
  ProfileAvatarImage,
  RectangleButton
} from "@/components";
import Animated from "react-native-reanimated";
import { COLORS, IMAGES } from "@/constants";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TabView } from "react-native-tab-view";
import { useAuthStore } from "@/libs/zustand/auth.zustand";
import ProfileHeader from "@/components/profile/details/ProfileHeader";
import useProfileTabView from "@/hook/profile/useProfileTabView";

export default function UserProfile() {
  const authStore = useAuthStore((state) => state);
  const {
    animatedStyles,
    renderScene,
    renderTabBar,
    index,
    setIndex,
    routes,
    layout
  } = useProfileTabView();

  return (
    <SafeAreaView className="h-full bg-white">
      <Animated.View style={[animatedStyles]}>
        <ProfileHeader />
        <View className=" items-center gap-3">
          <ProfileAvatarImage source={IMAGES.fakeavatar} />
          <FontText className="font-bold text-2xl">
            {authStore.endUser.username}
          </FontText>
          <View className="flex-row justify-center items-center gap-5 px-5 my-3">
            <RectangleButton
              text="Add friend"
              className="flex-1"
              iconLeft={
                <AddUserSVG height={22} width={22} strokeColor={"white"} />
              }
              textStyle="font-bold ml-2"
            />
            <RectangleButton
              text="Message"
              textColor={COLORS.primary}
              iconLeft={
                <CommentSVG
                  width={20}
                  height={20}
                  strokeColor={COLORS.primary}
                />
              }
              textStyle="font-bold ml-2"
              className="bg-white border border-primary text-primary flex-1"
            />
          </View>
        </View>
      </Animated.View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
        initialLayout={{ width: layout.width }}
      />
    </SafeAreaView>
  );
}
