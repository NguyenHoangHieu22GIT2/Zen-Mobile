import { Text, Pressable } from "react-native";
import { router } from "expo-router";
import { Feed, TopWrapperView } from "@/components";

export default function Popular() {
  return (
    <TopWrapperView className="">
      <Pressable onPress={() => router.push("/login")}>
        <Text>Go back to Login</Text>
      </Pressable>
      <Pressable onPress={() => router.push("/details/")}>
        <Text>Go to Details</Text>
      </Pressable>
      <Feed />
      <Feed />
      <Feed />
      <Feed />
      <Feed />
    </TopWrapperView>
  );
}
