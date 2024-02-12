import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

export default function SignInForm() {
  const router = useRouter();
  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Text>This is SignInForm</Text>
      <TouchableOpacity
        onPress={() => {
          router.push("/popular/");
        }}
      >
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          router.push("/sign-up/");
        }}
      >
        <Text>Go to sign-up page</Text>
      </TouchableOpacity>
    </View>
  );
}
