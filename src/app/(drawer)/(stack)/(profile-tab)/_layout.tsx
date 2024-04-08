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

export default function ProfileLayout() {
  return (
    <MaterialTopTabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary,
        tabBarPressColor: COLORS.white,
        tabBarStyle: {
          shadowColor: "white",
          borderBottomWidth: 0.5,
          borderBottomColor: COLORS.lightgray
        },
        tabBarIndicatorStyle: {
          backgroundColor: COLORS.primary,
          width: 90,
          borderRadius: 100,
          marginLeft: 15
        },
        tabBarLabelStyle: { textTransform: "capitalize", fontWeight: "bold" }
      }}
    >
      <MaterialTopTabs.Screen name="about" />
      <MaterialTopTabs.Screen name="post" />
      <MaterialTopTabs.Screen name="like" />
    </MaterialTopTabs>
  );
}
