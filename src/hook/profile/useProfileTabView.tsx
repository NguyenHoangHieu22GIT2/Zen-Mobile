import { ProfileAboutTab, ProfileLikeTab, ProfilePostTab } from "@/components";
import { COLORS } from "@/constants";
import { useMemo, useState } from "react";
import { useWindowDimensions } from "react-native";
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from "react-native-reanimated";
import { SceneMap, TabBar } from "react-native-tab-view";

export default function useProfileTabView() {
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
  return {
    layout,
    headerHeight,
    animatedStyles,
    renderScene,
    index,
    setIndex,
    routes,
    renderTabBar
  };
}
