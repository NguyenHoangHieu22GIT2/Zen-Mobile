import { Tabs } from "expo-router";
import NavBarIcon from "@/components/layout/NavBarIcon";
import { COLORS } from "@/constants";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarLabelStyle: {
          display: "none"
        },
        tabBarActiveTintColor: COLORS.primary,
        headerShown: false,
        tabBarHideOnKeyboard: true
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
          )
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <NavBarIcon
              focused={focused}
              label="Search"
              name="code"
              color={color}
            />
          )
        }}
      />
      <Tabs.Screen
        name="group"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <NavBarIcon
              focused={focused}
              label="Group"
              name="code"
              color={color}
            />
          )
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <NavBarIcon
              focused={focused}
              label="Notifications"
              name="code"
              color={color}
            />
          )
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <NavBarIcon
              focused={focused}
              label="Chat"
              name="code"
              color={color}
            />
          )
        }}
      />
    </Tabs>
  );
}
