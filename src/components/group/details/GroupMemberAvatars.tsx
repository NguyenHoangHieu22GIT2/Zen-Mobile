import { IMAGES } from "@/constants";
import { View, Text, Image, TouchableOpacity } from "react-native";

type props = {
  avatars: string[];
  memberLength: number;
  className?: string;
  maxAvatarDisplay: number;
  onPress?: () => void;
};
export default function GroupMemberAvatars({
  avatars,
  className,
  memberLength,
  maxAvatarDisplay,
  onPress
}: props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`flex-row items-center ${className}`}
    >
      {avatars.map((avatar, index) => {
        if (index < maxAvatarDisplay) {
          return <Avatar avatar={avatar} key={index} />;
        } else if (
          index === maxAvatarDisplay &&
          memberLength - maxAvatarDisplay > 0
        ) {
          return (
            <View
              key={index}
              className="-mr-2 rounded-full h-10 w-10 items-center justify-center bg-gray-300"
            >
              <Text className="text-sm font-bold">
                +{memberLength - maxAvatarDisplay}
              </Text>
            </View>
          );
        }
      })}
    </TouchableOpacity>
  );
}
const Avatar = ({ avatar }: { avatar: string }) => {
  console.log("avatar", avatar);
  return (
    <View className="-mr-2 rounded-full border border-gray-500/50 overflow-hidden">
      <Image
        source={
          avatar && avatar.length > 10
            ? { uri: process.env.EXPO_PUBLIC_HTTP_UPLOADS + avatar }
            : IMAGES.fakeavatar
        }
        className="w-10 h-10 rounded-full"
      />
    </View>
  );
};
