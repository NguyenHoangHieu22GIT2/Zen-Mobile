import React from "react";
import { DrawerItem } from "@react-navigation/drawer";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { router } from "expo-router";

export default function CustomDrawerItem(props: {
  FontAwesomeIconName: React.ComponentProps<typeof FontAwesome>["name"];
  pathname: string;
  label: string;
  onPress?: () => void;
}) {
  const navigation = useNavigation();

  return (
    <DrawerItem
      icon={({ color }) => (
        <FontAwesome size={28} name={props.FontAwesomeIconName} color={color} />
      )}
      label={props.label}
      labelStyle={[
        {
          marginLeft: -20
        }
      ]}
      onPress={() => {
        if (props.onPress) props.onPress();
        navigation.dispatch(DrawerActions.closeDrawer());
        if (props.pathname) router.push(props.pathname);
      }}
    />
  );
}
