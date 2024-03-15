import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
  MaterialTopTabNavigationEventMap
} from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";
import { TabNavigationState, ParamListBase } from "@react-navigation/native";
import { COLORS } from "@/constants";

const { Navigator } = createMaterialTopTabNavigator();
export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

export default function FeedLayout() {
  return (
    <MaterialTopTabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary,
        tabBarIndicatorStyle: { backgroundColor: COLORS.primary },
        tabBarLabelStyle: { textTransform: "capitalize", fontWeight: "bold" }
      }}
    >
      <MaterialTopTabs.Screen name="popular" />
      <MaterialTopTabs.Screen name="trending" />
      <MaterialTopTabs.Screen name="following" />
    </MaterialTopTabs>
  );
}
