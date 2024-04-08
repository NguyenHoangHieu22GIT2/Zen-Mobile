import { IMAGES } from "@/constants";
import { View, Image } from "react-native";
import FontText from "../common/FontText";

export default function NoNotification() {
  return (
    <View className="justify-center items-center h-full">
      <Image source={IMAGES.nonotification} className="w-40 h-40" />
      <FontText className="font-bold text-lg text-darkblack my-2">
        No Notifications!
      </FontText>
      <FontText className="font-bold text-lg text-gray-400 w-3/4 text-center">
        There are currently no notification waiting for you
      </FontText>
    </View>
  );
}
