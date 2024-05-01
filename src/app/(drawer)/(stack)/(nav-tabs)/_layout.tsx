import { Tabs } from "expo-router";
import { COLORS } from "@/constants";
import HomeSVG from "@/components/svg/HomeSVG";
import MagnifyingGlassSVG from "@/components/svg/MagnifyingGlassSVG";
import GroupSVG from "@/components/svg/GroupSVG";
import BellSVG from "@/components/svg/BellSVG";
import InboxSVG from "@/components/svg/InboxSVG";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarLabelStyle: {
          display: "none"
        },
        tabBarActiveTintColor: COLORS.secondary,
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
          borderLeftWidth: 0.5,
          borderRightWidth: 0.5,
          borderTopWidth: 0,
          borderColor: COLORS.gray2
        }
      }}
    >
      <Tabs.Screen
        name="(home-tabs)"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <HomeSVG
              width={32}
              height={32}
              isActive={focused}
              fillColor={color}
            />
          )
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <MagnifyingGlassSVG
              width={35}
              height={35}
              isActive={focused}
              fillColor={color}
            />
          )
        }}
      />
      <Tabs.Screen
        name="group"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <GroupSVG
              width={40}
              height={40}
              isActive={focused}
              fillColor={color}
            />
          )
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <BellSVG
              width={35}
              height={35}
              isActive={focused}
              fillColor={color}
            />
          )
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <InboxSVG
              width={35}
              height={35}
              isActive={focused}
              fillColor={color}
            />
          )
        }}
      />
    </Tabs>
  );
}
