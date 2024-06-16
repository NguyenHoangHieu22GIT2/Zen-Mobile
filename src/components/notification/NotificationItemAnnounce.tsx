import { Image, Pressable } from "react-native";
import FontText from "../common/FontText";
import { Notification } from "@/types/notification.type";
import { COLORS, IMAGES } from "@/constants";
import { getPastTense, minimizeString } from "@/utils/funcs/string_helper";

type NotificationItemProps = {
  notification: Notification;
  onPress?: () => void;
};

export default function NotificationItemAnnounce({
  notification: { subject, verb, directObject, prepObject, createdAt },
  onPress
}: NotificationItemProps) {
  const userSent = subject;
  const message = `${
    verb == "friend-request"
      ? "friend requested"
      : verb == "group-member-request"
      ? "requested to join"
      : getPastTense(verb)
  } ${directObject ? "your" : "you"} ${directObject?.type ?? ""} "${
    directObject ? minimizeString(directObject.name, 20) : ""
  }" ${prepObject ? "in " + prepObject.name : ""}`;
  const avatar = subject.image;
  return (
    <Pressable
      android_ripple={{
        color: COLORS.gray2,
        borderless: false,
        foreground: true
      }}
      className="flex-row gap-2 items-center px-4 py-4 rounded-xl overflow-hidden"
      onPress={onPress}
    >
      <Image
        source={
          avatar.length > 8
            ? { uri: process.env.EXPO_PUBLIC_HTTP_UPLOADS + avatar }
            : IMAGES.fakeavatar
        }
        className="w-11 h-11 rounded-full mr-1"
      />

      <FontText className="flex-1 font-bold text-gray-500">
        <FontText className="font-extrabold text-darkblack">
          {userSent.name + " "}
        </FontText>
        {message}
      </FontText>
      <FontText className="font-bold text-gray-500 ml-3">
        {new Date(createdAt).toDateString()}
      </FontText>
    </Pressable>
  );
}
