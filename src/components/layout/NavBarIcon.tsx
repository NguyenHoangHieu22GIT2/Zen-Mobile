import { View, Text } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { COLORS } from "@/constants";

// You can explore the built-in icon families and icons on the web at https://oblador.github.io/react-native-vector-icons/
export default function NavBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
  focused: boolean;
  label: string;
}) {
  return (
    <View className="flex justify-center items-center">
      <FontAwesome
        size={props.focused ? 30 : 28}
        style={{ marginBottom: -3 }}
        {...props}
      />
      {props.focused && (
        <Text className={`text-xs font-semibold text-[${COLORS.primary}]`}>
          {props.label}
        </Text>
      )}
    </View>
  );
}
