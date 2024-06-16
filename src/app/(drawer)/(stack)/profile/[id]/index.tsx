import {
  AddUserSVG,
  CommentSVG,
  EditSVG,
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
import { router, useLocalSearchParams } from "expo-router";
import useFetchEndUser from "@/hook/profile/useFetchEndUser";
import { useEffect, useMemo } from "react";
import useAddFriend from "@/hook/profile/useAddFriend";
import GroupMemberAvatars from "@/components/group/details/GroupMemberAvatars";
import useFetchUserFriends from "@/hook/profile/useFetchUserFriends";

export default function UserProfile() {
  const { id } = useLocalSearchParams();
  // const myEndUser = useAuthStore((state) => state.endUser);
  const {
    animatedStyles,
    renderTabBar,
    index,
    setIndex,
    routes,
    layout,
    headerHeight
  } = useProfileTabView();
  // let endUser;
  // const isMyProfile = id === myEndUser._id;
  // if (!isMyProfile) {
  //   const { endUser: a } = useFetchEndUser(id as string);
  //   endUser = a;
  // } else {
  //   endUser = myEndUser;
  // }
  const { endUser, isMyProfile, mutate, isLoading, error } = useFetchEndUser(
    id as string
  );
  const { createConversation } = useCreateConversation();
  const { addFriend, friendRequestSent } = useAddFriend();
  const { friends } = useFetchUserFriends(id as string);
  useEffect(() => {
    console.log("fri", friends);
  }, [endUser]);
  const renderScene = useMemo(
    () =>
      SceneMap({
        about: () => (
          <ProfileAboutTab endUser={endUser} headerHeight={headerHeight} />
        ),
        like: () => (
          <ProfileLikeTab
            headerHeight={headerHeight}
            endUserId={id as string}
          />
        ),
        post: () => (
          <ProfilePostTab
            headerHeight={headerHeight}
            endUserId={id as string}
          />
        )
      }),
    [headerHeight]
  );

  if (isLoading) return <></>;
  if (!endUser) return <></>;
  if (error)
    return (
      <View>
        <FontText>{error}</FontText>
      </View>
    );

  return (
    <SafeAreaView className="h-full bg-white">
      <Animated.View style={[animatedStyles]}>
        <ProfileHeader endUser={endUser} />
        <View className=" items-center gap-3">
          <ProfileAvatarImage
            source={
              endUser.avatar.length < 8
                ? IMAGES.fakeavatar
                : { uri: process.env.EXPO_PUBLIC_HTTP_UPLOADS + endUser.avatar }
            }
          />
          <FontText className="font-bold text-2xl">
            {endUser?.username}
          </FontText>
          <View className="flex-row justify-center items-center gap-5 px-5 my-3">
            {!isMyProfile ? (
              <>
                <RectangleButton
                  text={`${
                    endUser?.isFriend
                      ? "Friend"
                      : friendRequestSent
                      ? "Pending"
                      : "Add friend"
                  }`}
                  className={`flex-1 ${
                    (endUser?.isFriend || friendRequestSent) &&
                    "border border-primary"
                  }`}
                  iconLeft={
                    !friendRequestSent && !endUser.isFriend ? (
                      <AddUserSVG
                        height={22}
                        width={22}
                        strokeColor={"white"}
                      />
                    ) : (
                      <></>
                    )
                  }
                  textStyle={`font-bold ml-2 ${
                    (endUser?.isFriend || friendRequestSent) && "!text-primary"
                  }`}
                  onPress={async () => {
                    await addFriend(endUser);
                    mutate();
                  }}
                  secondary={endUser?.isFriend || friendRequestSent}
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
            ) : (
              <RectangleButton
                text={`Edit Profile`}
                className="flex-1"
                iconLeft={
                  <EditSVG width={25} height={25} strokeColor={"white"} />
                }
                textStyle="font-bold ml-2"
                onPress={() => {
                  router.push("profile/edit");
                }}
              />
            )}
          </View>
          <View className="flex-row gap-4 items-center">
            {friends && friends?.length > 0 ? (
              <>
                <GroupMemberAvatars
                  maxAvatarDisplay={4}
                  memberLength={friends?.length}
                  avatars={friends.map((i) => i.avatar)}
                  className="my-2"
                  onPress={() => {
                    router.push(`profile/${id}/friends`);
                  }}
                />
                <FontText>are friends</FontText>
              </>
            ) : (
              <FontText className="italic">No friends</FontText>
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
