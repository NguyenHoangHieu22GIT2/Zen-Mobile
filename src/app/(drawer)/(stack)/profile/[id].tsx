import {
  AddUserSVG,
  BackSvg,
  CommentSVG,
  EditSVG,
  FontText,
  ProfileAboutTab,
  ProfileAvatarImage,
  ProfileLikeTab,
  ProfilePostTab,
  RectangleButton
} from "@/components";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from "react-native-reanimated";
import { COLORS, IMAGES } from "@/constants";
import { router, useLocalSearchParams } from "expo-router";
import { useMemo, useState } from "react";
import { Pressable, View, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import OptionMenu, { Option } from "@/components/common/popup/OptionMenu";

// const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
//   const paddingToBottom = 0;
//   const currentVisibleContentHeight = layoutMeasurement.height;
//   const visibleContentY = contentOffset.y;
//   const contentHeight = contentSize.height;
//   return (
//     visibleContentY + currentVisibleContentHeight >=
//     contentHeight - paddingToBottom
//   );
// };

export default function UserProfile() {
  const { id } = useLocalSearchParams();
  const layout = useWindowDimensions();
  const headerHeight = useSharedValue(330 / 2);

  const animatedStyles = useAnimatedStyle(() => ({
    height: withTiming(headerHeight.value * 2, { duration: 500 })
  }));

  const renderScene = useMemo(
    () =>
      SceneMap({
        about: () => <ProfileAboutTab headerHeight={headerHeight} />,
        like: () => <ProfileLikeTab headerHeight={headerHeight} />,
        post: () => <ProfilePostTab headerHeight={headerHeight} />
      }),
    [headerHeight]
  );

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "about", title: "About" },
    { key: "like", title: "Likes" },
    { key: "post", title: "Posts" }
  ]);
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      activeColor={COLORS.primary}
      indicatorStyle={{
        backgroundColor: COLORS.primary,
        marginHorizontal: 10,
        width: 100
      }}
      labelStyle={{ color: "#a8abc8" }}
      style={{ backgroundColor: "white" }}
    />
  );
  return (
    <SafeAreaView className="h-full bg-white">
      <Animated.View style={[animatedStyles]}>
        <View className="flex-row justify-between items-center">
          <Pressable
            android_ripple={{
              color: COLORS.lightgray,
              borderless: false,
              foreground: true
            }}
            className="px-4 py-4 mx-2  rounded-full overflow-hidden justify-start"
            style={{ width: 50 }}
            onPress={router.back}
          >
            <BackSvg />
          </Pressable>
          <OptionMenu snapPoint={[125]}>
            <Option
              onPress={() => {
                router.push("profile/edit");
              }}
              label="Edit Profile"
              icon={
                <EditSVG
                  width={25}
                  height={25}
                  strokeColor={COLORS.lightblack}
                />
              }
            />
          </OptionMenu>
        </View>
        <View className=" items-center gap-3">
          <ProfileAvatarImage source={IMAGES.fakeavatar} />
          <FontText className="font-bold text-2xl">David Sibia</FontText>
          <View className="flex-row items-center gap-4 my-2">
            <View className="gap-1.5">
              <FontText className="text-center">100</FontText>
              <FontText className="text-gray-500 text-center">
                Following
              </FontText>
            </View>
            <View className="w-0.5 h-10 rounded-xl bg-gray-300" />
            <View className="gap-1.5">
              <FontText className="text-center">100</FontText>
              <FontText className="text-gray-500 text-center">
                Followers
              </FontText>
            </View>
          </View>
          <View className="flex-row justify-center items-center gap-5 px-5 my-3">
            <RectangleButton
              text="Follow"
              className="flex-1"
              iconLeft={
                <AddUserSVG height={22} width={22} strokeColor={"white"} />
              }
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
