import { Pressable, View } from "react-native";
import FontText from "../../common/FontText";
import { COLORS, IMAGES } from "@/constants";
import ConversationItemAvatarImage from "../details/ConversationItemAvatarImage";
import { Conversation } from "@/types/conversation.type";
import { useAuthStore } from "@/libs/zustand/auth.zustand";

type props = {
  item: Conversation;
  onPress: () => void;
};

export default function ConversationItem({ onPress, item }: props) {
  const myEndUser = useAuthStore((state) => state.endUser);
  const aitenamae =
    item.endUserIds[0]?._id == myEndUser._id
      ? item.endUserIds[1]?.username
      : item.endUserIds[0]?.username;

  return (
    <Pressable
      android_ripple={{
        color: COLORS.lightgray,
        borderless: false,
        foreground: true
      }}
      onPress={() => {
        onPress();
      }}
      className="flex-row gap-3 px-4 py-3"
    >
      <ConversationItemAvatarImage
        source={
          item.endUserIds[0].username == aitenamae
            ? item.endUserIds[0].avatar
              ? {
                  uri:
                    process.env.EXPO_PUBLIC_HTTP_UPLOADS +
                    item.endUserIds[0].avatar
                }
              : IMAGES.fakeavatar
            : item.endUserIds[1].avatar
            ? {
                uri:
                  process.env.EXPO_PUBLIC_HTTP_UPLOADS +
                  item.endUserIds[1].avatar
              }
            : IMAGES.fakeavatar
        }
      />

      <View className="flex items-center justify-center">
        <FontText className="text-xl font-bold">{aitenamae}</FontText>
        {/* <View className="flex-row ">
          <FontText className="text-lg text-gray-400" numberOfLines={1}>
            Message
          </FontText>
          <FontText className="text-lg text-gray-400"> • Time</FontText>
        </View> */}
      </View>
    </Pressable>
  );
}
