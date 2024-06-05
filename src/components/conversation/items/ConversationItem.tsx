import { Pressable, View } from "react-native";
import FontText from "../../common/FontText";
import { COLORS, IMAGES } from "@/constants";
import ConversationItemAvatarImage from "../details/ConversationItemAvatarImage";
import { Conversation } from "@/types/conversation.type";

type props = {
  item: Conversation;
  onPress: () => void;
};

export default function ConversationItem({ onPress, item }: props) {
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
      <ConversationItemAvatarImage source={IMAGES.fakeavatar} />

      <View className="flex">
        <FontText className="text-xl font-bold">{item.name}</FontText>
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
