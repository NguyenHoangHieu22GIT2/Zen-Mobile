import { View, Image, ImageSourcePropType } from "react-native";
import FontText from "../common/FontText";
import PressableText from "../common/PressableText";

export type NotificationItemProps = {
  imageSource?: ImageSourcePropType;
  username?: string;
  message: string;
  time: string;
};

export default function NotificationItem(props: NotificationItemProps) {
  const { imageSource, message, time, username } = props;
  return (
    <View className="flex-row gap-2 px-4 items-center my-2">
      {imageSource && (
        <Image source={imageSource} className="w-11 h-11 rounded-full mr-1" />
      )}

      <PressableText className="font-extrabold text-darkblack">
        {username}
      </PressableText>
      <FontText className="flex-1 font-bold text-gray-500">{message}</FontText>
      <FontText className="font-bold text-gray-500 ml-3">{time}</FontText>
    </View>
  );
}
