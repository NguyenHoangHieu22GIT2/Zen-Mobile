import { View, Pressable } from "react-native";
import OptionMenu, { Option } from "../../common/popup/OptionMenu";
import FontText from "../../common/FontText";
import ChatItemAvatarImage from "./ConversationItemAvatarImage";
import BackSvg from "../../svg/BackSvg";
import { router } from "expo-router";
import { IMAGES } from "@/constants";

type props = {
  aitename: string;
  aiteavatar: string;
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function ConversationRoomHeader({
  aitename,
  aiteavatar
}: props) {
  return (
    <View className="flex-row items-center gap-2 px-3 py-1 bg-white shadow-lg">
      <Pressable
        android_ripple={{
          color: "lightgray",
          borderless: false,
          foreground: true
        }}
        onPress={router.back}
      >
        <BackSvg />
      </Pressable>
      <ChatItemAvatarImage
        source={
          aiteavatar?.length > 8
            ? { uri: process.env.EXPO_PUBLIC_HTTP_UPLOADS + aiteavatar }
            : IMAGES.fakeavatar
        }
      />
      <View className="flex-1">
        <FontText>{aitename}</FontText>
        <FontText>Offline</FontText>
      </View>
      <OptionMenu snapPoint={[400]}>
        <Option icon={<></>} label="User Profile" onPress={() => {}} />
        <Option icon={<></>} label="Delete conversation" onPress={() => {}} />
      </OptionMenu>
    </View>
  );
}
