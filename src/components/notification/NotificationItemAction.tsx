import { View, Image, Pressable } from "react-native";
import FontText from "../common/FontText";
import { Notification } from "@/types/notification.type";
import RectangleButton from "../common/RectangleButton";
import { COLORS, IMAGES } from "@/constants";
import { router } from "expo-router";

type NotificationItemProps = {
  notification: Notification;
  onReject: () => void;
  onAccept: () => void;
  onPress?: () => void;
};

export default function NotificationItemAction({
  notification: { userSent, title, createdAt },
  onAccept,
  onReject,
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
      className="flex-row gap-2 px-4 my-2 py-2 overflow-hidden"
      onPress={onPress}
    >
      {avatar && (
        <Image
          source={IMAGES.fakeavatar}
          className="w-11 h-11 rounded-full mr-1"
        />
      )}

      <View className="flex-1 gap-2">
        <View className="flex-row gap-2 ">
          <FontText className="flex-1 font-bold text-gray-500 ">
            <FontText
              onPress={() => {
                router.push(`profile/${userSent._id}`);
              }}
              className="font-extrabold text-darkblack"
            >
              {userSent.username + " "}
            </FontText>
            {title}
          </FontText>
          <FontText className="font-bold text-gray-500 ml-3">
            {new Date(createdAt).toDateString()}
          </FontText>
        </View>
        <View className="flex-row gap-2">
          <RectangleButton
            text="Reject"
            onPress={onReject}
            textColor={COLORS.gray}
            textStyle="font-bold mx-3"
            className="border-gray-300"
            secondary
          />
          <RectangleButton
            text="Accept"
            textStyle="font-bold mx-3 "
            onPress={onAccept}
            className="border-gray-300"
          />
        </View>
      </View>
    </Pressable>
  );
}
