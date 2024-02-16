import { Tabs } from "expo-router";
import NavBarIcon from "@/components/layout/NavBarIcon";
import { COLORS } from "@/constants";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarLabelStyle: {
          display: "none",
        },
        tabBarActiveTintColor: COLORS.primary,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="(feed-tabs)"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <NavBarIcon
              focused={focused}
              label="Home"
              name="code"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <NavBarIcon
              focused={focused}
              label="Profile"
              name="code"
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
