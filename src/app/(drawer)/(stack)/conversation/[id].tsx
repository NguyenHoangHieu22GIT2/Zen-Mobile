import { FontText } from "@/components";
import ConversationHeader from "@/components/chat/ConversationHeader";
import Message from "@/components/chat/Message";
import MessageInput from "@/components/chat/MessageInput";
import { IMAGES } from "@/constants";
import { Message as MessageType } from "@/types/message.type";
import { useState } from "react";
import { View, FlatList, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const messages: MessageType[] = [
  {
    _id: "id1",
    message: "asd",
    endUser: { _id: "1", username: "username", avatar: "" },
    visibility: "normal",
    createdAt: new Date()
  },
  {
    _id: "id2",
    message: "asd",
    endUser: { _id: "2", username: "username", avatar: "" },
    visibility: "normal",
    createdAt: new Date()
  },
  {
    _id: "id3",
    message: "asd",
    endUser: { _id: "2", username: "username", avatar: "" },
    visibility: "normal",
    createdAt: new Date()
  }
];

export default function Conversation() {
  //eslint-disable-next-line
  const [inputs, setInputs] = useState("");

  return (
    <SafeAreaView>
      <ImageBackground className="w-full h-full" source={IMAGES.appbackground}>
        <ConversationHeader conversation={{ _id: "1", endUsers: [] }} />
        <FlatList
          data={messages}
          keyExtractor={(i) => i._id}
          renderItem={({ item, index }) => (
            <Message previousMessage={messages[index - 1]} message={item} />
          )}
          ListHeaderComponent={
            <View className="justify-center py-5 pt-8">
              <FontText className="font-bold text-gray-400 text-center text-xl">
                Beginning of the conversation
              </FontText>
              <FontText className="font-bold text-gray-400 text-center text-xl">
                ...
              </FontText>
            </View>
          }
          ItemSeparatorComponent={() => <View className="h-2" />}
        />
        <MessageInput onChangeInput={(text) => setInputs(text)} />
      </ImageBackground>
    </SafeAreaView>
  );
}
