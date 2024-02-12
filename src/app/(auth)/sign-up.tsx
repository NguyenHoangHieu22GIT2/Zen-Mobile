import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function SignUpForm() {
  const router = useRouter();
  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Text>This is SignUpForm</Text>
      <TouchableOpacity
        onPress={() => {
          router.push("/sign-in/");
        }}
      >
        <Text>Go to sign-in page</Text>
      </TouchableOpacity>
    </View>
  );
}
