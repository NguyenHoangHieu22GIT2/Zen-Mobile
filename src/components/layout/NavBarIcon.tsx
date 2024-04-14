import { View } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

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
        size={props.focused ? 30 : 26}
        style={{ marginBottom: -3 }}
        {...props}
      />
    </View>
  );
}
