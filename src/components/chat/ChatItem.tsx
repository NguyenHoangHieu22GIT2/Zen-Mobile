import { Pressable, View } from "react-native";
import FontText from "../common/FontText";
import { COLORS, IMAGES } from "@/constants";
import ChatItemAvatarImage from "./ChatItemAvatarImage";
import { router } from "expo-router";

export default function ChatItem() {
  return (
    <Pressable
      android_ripple={{
        color: COLORS.lightgray,
        borderless: false,
        foreground: true
      }}
      onPress={() => {
        router.push("conversation/1");
      }}
      className="flex-row gap-3 px-4 py-3"
    >
      <ChatItemAvatarImage source={IMAGES.fakeavatar} />

      <View className="flex">
        <FontText className="text-xl font-bold">Username</FontText>
        <View className="flex-row ">
          <FontText className="text-lg text-gray-400" numberOfLines={1}>
            Message
          </FontText>
          <FontText className="text-lg text-gray-400"> • Time</FontText>
        </View>
      </View>
    </Pressable>
  );
}
