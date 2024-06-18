import { View, Image, Pressable } from "react-native";
import FontText from "../common/FontText";
import { COLORS, IMAGES } from "@/constants";
import { EndUserSearchMinimal } from "@/types/enduser.type";
import RightArrowSVG from "../svg/RightArrowSVG";
export type PeopleSearchResultItemProps = {
  endUser: EndUserSearchMinimal;
  onPress: () => void;
  onAddFriend: () => void;
};

export default function PeopleSearchResultItem({
  endUser: { description, username, avatar },
  onPress
}: PeopleSearchResultItemProps) {
  return (
    <Pressable
      android_ripple={{
        color: COLORS.lightgray,
        borderless: false,
        foreground: true
      }}
      onPress={onPress}
      className="overflow-hidden shadow-gray-400 rounded-xl bg-white px-3 py-4 flex-row items-center gap-4 "
    >
      <Image
        source={
          avatar.length > 8
            ? { uri: process.env.EXPO_PUBLIC_HTTP_UPLOADS + avatar }
            : IMAGES.fakeavatar
        }
        className="w-14 h-14 rounded-full"
      />
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
      <RightArrowSVG width={20} height={20} strokeColor={"black"} />
      {/* <Pressable
        android_ripple={{
          color: COLORS.lightgray,
          borderless: false,
          foreground: true
        }}
        className={`overflow-hidden ${
          friendRequestSent ? "bg-white" : "bg-lightblack"
        }  px-4 py-3 border-gray-200 border rounded-xl`}
        onPress={onAddFriend}
      >
        <FontText className="text-white font-bold">
          {friendRequestSent ? "Pending" : "Add friend"}
        </FontText>
      </Pressable> */}
    </Pressable>
  );
}
