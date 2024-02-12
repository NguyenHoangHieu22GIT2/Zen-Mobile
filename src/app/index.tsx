import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Page() {
  const { top } = useSafeAreaInsets();

  return (
    <View style={{ top }} className="flex flex-1">
      <Text>This is great</Text>
    </View>
  );
}
