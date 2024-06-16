import FontText from "@/components/common/FontText";
import OptionMenu, { Option } from "@/components/common/popup/OptionMenu";
import { COLORS, IMAGES } from "@/constants";
import { EndUserSearchMinimal } from "@/types/enduser.type";
import { View, Image, Pressable } from "react-native";

type props = {
  endUser: EndUserSearchMinimal;
  isYourFriends: boolean;
  onUnfriend: () => void;
};
export default function UserFriendItem({
  endUser,
  onUnfriend,
  isYourFriends
}: props) {
  return (
    <Pressable
      android_ripple={{
        color: COLORS.gray2,
        borderless: false,
        foreground: true
      }}
      className="px-3 py-2 flex-row gap-3 items-center overflow-hidden "
    >
      <Image
        className="w-16 h-16 rounded-full border border-gray-300"
        source={
          endUser.avatar && endUser.avatar.length > 10
            ? { uri: endUser.avatar }
            : IMAGES.fakeavatar
        }
      />
      <View className="flex-1">
        <FontText className="font-bold text-lg">{endUser.username}</FontText>
        <FontText numberOfLines={1} className="text-gray-400">
          {endUser.description}
        </FontText>
      </View>
      {isYourFriends && (
        <OptionMenu snapPoint={[150]}>
          <Option icon={<></>} label="Block" onPress={() => {}} />
          <Option icon={<></>} label="Unfriend" onPress={onUnfriend} />
        </OptionMenu>
      )}
    </Pressable>
  );
}
