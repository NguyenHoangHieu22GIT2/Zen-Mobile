import { Image, Pressable } from "react-native";
import FontText from "../common/FontText";
import { Notification } from "@/types/notification.type";
import { COLORS, IMAGES } from "@/constants";

type NotificationItemProps = {
  notification: Notification;
  onPress?: () => void;
};

export default function NotificationItemAnnounce({
  notification: { userSent, title, createdAt },
  onPress
}: NotificationItemProps) {
  const avatar = userSent.avatar;
  return (
    <Pressable
      android_ripple={{
        color: COLORS.gray2,
        borderless: false,
        foreground: true
      }}
      className="flex-row gap-2 items-center px-4 my-2 py-2 overflow-hidden"
      onPress={onPress}
    >
      {avatar && (
        <Image
          source={IMAGES.fakeavatar}
          className="w-11 h-11 rounded-full mr-1"
        />
      )}

      <FontText className="flex-1 font-bold text-gray-500">
        <FontText className="font-extrabold text-darkblack">
          {userSent.username + " "}
        </FontText>
        {title}
      </FontText>
      <FontText className="font-bold text-gray-500 ml-3">
        {new Date(createdAt).toDateString()}
      </FontText>
    </Pressable>
  );
}
