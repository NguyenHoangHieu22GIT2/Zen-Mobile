import FontText from "@/components/common/FontText";
import RectangleButton from "@/components/common/RectangleButton";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { COLORS, IMAGES } from "@/constants";
import { FriendRequest } from "@/types/friend-request.type";
import { View, Image, Pressable } from "react-native";
import { router } from "expo-router";

type props = {
  friendRequest: FriendRequest;
  onAccept: () => void;
  onDecline: () => void;
};
export default function FriendRequestItem({
  friendRequest,
  onAccept,
  onDecline
}: props) {
  return (
    <Pressable
      android_ripple={{
        color: COLORS.gray2,
        borderless: false,
        foreground: true
      }}
      className="px-3 py-2 flex-row gap-3 items-center rounded-xl overflow-hidden "
      onPress={() => {
        router.push("/profile/" + friendRequest.endUser._id);
      }}
    >
      <Image
        className="w-16 h-16 rounded-full border border-gray-300"
        source={
          friendRequest.endUser.avatar?.length > 10
            ? {
                uri:
                  process.env.EXPO_PUBLIC_HTTP_UPLOADS +
                  friendRequest.endUser.avatar
              }
            : IMAGES.fakeavatar
        }
      />
      <View className="flex-1 flex-row justify-between items-center">
        <FontText className="font-bold text-lg">
          {friendRequest.endUser.username}
        </FontText>
        <View className="flex-row gap-2">
          <RectangleButton
            className="!bg-green-400 rounded-2xl px-5"
            text=""
            iconLeft={<FontAwesome size={18} name="check" color="#182f51" />}
            onPress={onAccept}
          />
          <RectangleButton
            className="!bg-red-400 rounded-2xl px-5"
            text=""
            iconLeft={<FontAwesome size={18} name="close" color="white" />}
            onPress={onDecline}
          />
        </View>
      </View>
    </Pressable>
  );
}
