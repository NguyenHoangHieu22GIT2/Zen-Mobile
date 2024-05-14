import { View, Image, Pressable } from "react-native";
import FontText from "../common/FontText";
import { COLORS, IMAGES } from "@/constants";
import { EndUserSearchMinimal } from "@/types/enduser.type";

export type PeopleSearchResultItemProps = {
  endUser: EndUserSearchMinimal;
  onPress: () => void;
  onAddFriend: () => void;
};

export default function PeopleSearchResultItem({
  endUser: { description, username },
  onPress,
  onAddFriend
}: PeopleSearchResultItemProps) {
  return (
    <Pressable
      android_ripple={{
        color: COLORS.lightgray,
        borderless: false,
        foreground: true
      }}
      onPress={onPress}
      className="overflow-hidden shadow-gray-400 bg-white px-3 py-2 flex-row items-center gap-4 "
    >
      <Image source={IMAGES.fakeavatar} className="w-14 h-14 rounded-full" />
      <View className="flex-1">
        <FontText className="font-bold text-xl text-darkblack">
          {username}
        </FontText>
        {description && (
          <FontText className="font-bold text-gray-400 " numberOfLines={2}>
            {description}
          </FontText>
        )}
      </View>
      <Pressable
        android_ripple={{
          color: COLORS.lightgray,
          borderless: false,
          foreground: true
        }}
        className="overflow-hidden bg-darkblack px-4 py-2 rounded-xl"
        onPress={onAddFriend}
      >
        <FontText className="text-white font-bold">Add friend</FontText>
      </Pressable>
    </Pressable>
  );
}
