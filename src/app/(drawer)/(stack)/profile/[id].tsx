import {
  AddUserSVG,
  CommentSVG,
  FontText,
  ProfileAboutTab,
  ProfileAvatarImage,
  ProfileLikeTab,
  ProfilePostTab,
  RectangleButton
} from "@/components";
import Animated from "react-native-reanimated";
import { COLORS, IMAGES } from "@/constants";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SceneMap, TabView } from "react-native-tab-view";
import ProfileHeader from "@/components/profile/details/ProfileHeader";
import useProfileTabView from "@/hook/profile/useProfileTabView";
import useCreateConversation from "@/hook/profile/useCreateConversation";
import { useLocalSearchParams } from "expo-router";
import useFetchEndUser from "@/hook/profile/useFetchEndUser";
import { useMemo } from "react";
import useAddFriend from "@/hook/profile/useAddFriend";
import { useAuthStore } from "@/libs/zustand/auth.zustand";

export default function UserProfile() {
  const { id } = useLocalSearchParams();
  const myEndUser = useAuthStore((state) => state.endUser);
  const {
    animatedStyles,
    renderTabBar,
    index,
    setIndex,
    routes,
    layout,
    headerHeight
  } = useProfileTabView();
  let endUser;
  const isMyProfile = id === myEndUser._id;
  if (!isMyProfile) {
    const { endUser: a } = useFetchEndUser(id as string);
    endUser = a;
  } else {
    endUser = myEndUser;
  }
  // const { endUser, isMyProfile, mutate } = useFetchEndUser(id as string);
  const { createConversation } = useCreateConversation();
  const { addFriend } = useAddFriend();

  const renderScene = useMemo(
    () =>
      SceneMap({
        about: () => (
          <ProfileAboutTab endUser={endUser} headerHeight={headerHeight} />
        ),
        like: () => <ProfileLikeTab headerHeight={headerHeight} />,
        post: () => <ProfilePostTab headerHeight={headerHeight} />
      }),
    [headerHeight]
  );

  return (
    <SafeAreaView className="h-full bg-white">
      <Animated.View style={[animatedStyles]}>
        <ProfileHeader endUser={endUser} />
        <View className=" items-center gap-3">
          <ProfileAvatarImage source={IMAGES.fakeavatar} />
          <FontText className="font-bold text-2xl">
            {endUser?.username}
          </FontText>
          <View className="flex-row justify-center items-center gap-5 px-5 my-3">
            {!isMyProfile && (
              <>
                <RectangleButton
                  text="Add friend"
                  className="flex-1"
                  iconLeft={
                    <AddUserSVG height={22} width={22} strokeColor={"white"} />
                  }
                  textStyle="font-bold ml-2"
                  onPress={async () => {
                    await addFriend(id as string);
                    // mutate();
                  }}
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
                  onPress={() => {
                    createConversation(id as string);
                  }}
                />
              </>
            )}
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
