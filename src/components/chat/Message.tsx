import { Pressable, View } from "react-native";
import FontText from "../common/FontText";
import { Message as MessageType } from "@/types/message.type";
import { Image } from "react-native";
import { IMAGES } from "@/constants";
import { useState } from "react";

type props = {
  message: MessageType;
  previousMessage: MessageType;
};

export default function Message({ message, previousMessage }: props) {
  const [openTimeSent, setOpenTimeSent] = useState(false);
  const isMe = message.endUser._id === "1";
  const isSameUser = previousMessage?.endUser._id === message.endUser._id;
  return (
    <View className="px-3 flex-row items-center gap-2 font-bold">
      {!isMe && (
        <Image
          className="w-10 h-10"
          source={!isSameUser && IMAGES.fakeavatar}
        />
      )}

      <View className="flex-1">
        {!isSameUser && (
          <FontText className={` self-start ${isMe && "ml-auto"}`}>
            {message.endUser.username}
          </FontText>
        )}

        <Pressable
          onPress={() => setOpenTimeSent((prev) => !prev)}
          className={`px-4 py-2 rounded-2xl max-w-[50%] self-start font-bold ${
            isMe ? "bg-primary ml-auto" : "bg-gray-300"
          }`}
        >
          <FontText
            className={`text-xl ${isMe ? "text-white" : "text-lightblack"}`}
          >
            {message.message}
          </FontText>
        </Pressable>
        {openTimeSent && (
          <FontText
            className={` self-start text-gray-400 ${isMe && "ml-auto"}`}
          >
            {message.createdAt.toLocaleTimeString()}
          </FontText>
        )}
      </View>
    </View>
  );
}
