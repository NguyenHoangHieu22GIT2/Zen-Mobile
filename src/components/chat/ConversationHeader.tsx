import { View, Pressable } from "react-native";
import OptionMenu, { Option } from "../common/popup/OptionMenu";
import FontText from "../common/FontText";
import ChatItemAvatarImage from "./ChatItemAvatarImage";
import BackSvg from "../svg/BackSvg";
import { router } from "expo-router";
import { Conversation } from "@/types/conversation.type";
import { IMAGES } from "@/constants";

type props = {
  conversation: Conversation;
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function ConversationHeader({ conversation }: props) {
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
      <ChatItemAvatarImage source={IMAGES.fakeavatar} />
      <View className="flex-1">
        <FontText>Username</FontText>
        <FontText>Status</FontText>
      </View>
      <OptionMenu snapPoint={[400]}>
        <Option icon={<></>} label="User Profile" onPress={() => {}} />
        <Option icon={<></>} label="Delete conversation" onPress={() => {}} />
      </OptionMenu>
    </View>
  );
}
