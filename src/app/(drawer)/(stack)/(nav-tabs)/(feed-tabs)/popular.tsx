import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";

export default function Popular() {
  return (
    <View className="flex justify-center items-center">
      <Text className="text-xl font-bold">Feeds</Text>
      <Pressable onPress={() => router.push("/login")}>
        <Text>Go back to HomePage</Text>
      </Pressable>
      <Pressable onPress={() => router.push("/details/")}>
        <Text>Go to Details</Text>
      </Pressable>
    </View>
  );
}
