import { PressableText } from "@/components";
import ConversationHeader from "@/components/conversation/details/ConversationRoomHeader";
import Message from "@/components/conversation/items/Message";
import MessageInput from "@/components/conversation/inputs/MessageInput";
import { COLORS, IMAGES } from "@/constants";
import { useMemo } from "react";
import {
  View,
  FlatList,
  ImageBackground,
  ActivityIndicator
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useSocketChat from "@/hook/chat/useSocketChat";
import { useLocalSearchParams } from "expo-router";
import { useAuthStore } from "@/libs/zustand/auth.zustand";
import { io } from "socket.io-client";
import useFetchMessages from "@/hook/chat/useFetchMessages";

const clientSocket = io(process.env.EXPO_PUBLIC_SOCKETIO_BASE_URL);

export default function Conversation() {
  //conversationId
  const { id, aitename, aiteavatar } = useLocalSearchParams();
  const enduserId = useAuthStore((state) => state.endUser._id);
  const { addMessage, messages, fetchMoreMessages, isReachEnd, isLoading } =
    useFetchMessages(id as string);
  const { emitMessage } = useMemo(
    () => useSocketChat(id as string, addMessage, clientSocket),
    [id]
  );

  return (
    <SafeAreaView>
      <ImageBackground className="w-full h-full" source={IMAGES.appbackground}>
        <ConversationHeader
          aitename={aitename as string}
          aiteavatar={aiteavatar as string}
        />
        <FlatList
          data={messages}
          keyExtractor={(i) => i._id}
          renderItem={({ item, index }) => (
            <Message
              aitename={aitename as string}
              previousMessage={messages[index - 1]}
              message={item}
              aiteavatar={aiteavatar as string}
            />
          )}
          ListHeaderComponent={
            <View className="justify-center py-5 pt-8">
              {isLoading ? (
                <ActivityIndicator size="large" color={COLORS.primary} />
              ) : (
                !isReachEnd && (
                  <PressableText
                    className="font-bold text-center"
                    onPress={fetchMoreMessages}
                  >
                    Load More
                  </PressableText>
                )
              )}
            </View>
          }
          ItemSeparatorComponent={() => <View className="h-2" />}
        />
        <MessageInput
          onSubmit={(text) => {
            emitMessage(text, enduserId);
          }}
        />
      </ImageBackground>
    </SafeAreaView>
  );
}
