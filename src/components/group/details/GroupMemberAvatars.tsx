import { IMAGES } from "@/constants";
import { View, Text, Image, TouchableOpacity } from "react-native";

type props = {
  avatars: string[];
  memberLength: number;
  className?: string;
  onPress?: () => void;
};
const MAX_AVATAR_DISPLAY = 4;
export default function GroupMemberAvatars({
  avatars,
  className,
  memberLength,
  onPress
}: props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`flex-row items-center ${className}`}
    >
      {avatars.map((avatar, index) => {
        if (index < MAX_AVATAR_DISPLAY) {
          return <Avatar key={index} />;
        } else if (
          index === MAX_AVATAR_DISPLAY &&
          memberLength - MAX_AVATAR_DISPLAY > 0
        ) {
          return (
            <View
              key={index}
              className="-mr-2 rounded-full h-10 w-10 items-center justify-center bg-gray-300"
            >
              <Text className="text-sm font-bold">
                +{memberLength - MAX_AVATAR_DISPLAY}
              </Text>
            </View>
          );
        }
      })}
    </TouchableOpacity>
  );
}
const Avatar = () => {
  return (
    <View className="-mr-2 rounded-full overflow-hidden">
      <Image source={IMAGES.fakeavatar} className="w-10 h-10 rounded-full" />
    </View>
  );
};
