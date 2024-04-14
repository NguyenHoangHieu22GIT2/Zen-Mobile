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
        name="(home-tabs)"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <NavBarIcon
              focused={focused}
              label="Home"
              name="home"
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
              name="search"
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
              name="group"
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
              name="bell"
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
              name="commenting"
              color={color}
            />
          )
        }}
      />
    </Tabs>
  );
}
