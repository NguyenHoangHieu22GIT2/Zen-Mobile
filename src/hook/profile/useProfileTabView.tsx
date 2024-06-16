import { COLORS } from "@/constants";
import { useState } from "react";
import { useWindowDimensions } from "react-native";
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from "react-native-reanimated";
import { TabBar } from "react-native-tab-view";

export default function useProfileTabView() {
  const layout = useWindowDimensions();
  const headerHeight = useSharedValue(360 / 2);

  const animatedStyles = useAnimatedStyle(() => ({
    height: withTiming(headerHeight.value * 2, { duration: 500 })
  }));

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
    index,
    setIndex,
    routes,
    renderTabBar
  };
}
