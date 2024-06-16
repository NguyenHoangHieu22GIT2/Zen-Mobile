import { FlatList } from "react-native-gesture-handler";
import { RefreshControl, View } from "react-native";
import { router } from "expo-router";
import ConversationItem from "../items/ConversationItem";
import useFetchConversations from "@/hook/chat/useFetchConversations";
import { COLORS } from "@/constants";
import { useAuthStore } from "@/libs/zustand/auth.zustand";

export default function Conversations() {
  const { data, isRefreshing, refreshConversation } = useFetchConversations();
  const myEndUserId = useAuthStore((state) => state.endUser._id);
  return (
    <FlatList
      ItemSeparatorComponent={() => (
        <View className="border-b border-gray-200 " />
      )}
      refreshControl={
        <RefreshControl
          colors={[COLORS.primary]}
          refreshing={isRefreshing}
          onRefresh={() => {
            refreshConversation();
          }}
        />
      }
      data={data}
      keyExtractor={(i) => i._id}
      renderItem={({ item }) => {
        return (
          <ConversationItem
            item={item}
            onPress={() => {
              router.push({
                pathname: "/conversation/" + item._id,
                params: {
                  aitename:
                    item.endUserIds[0]?._id == myEndUserId
                      ? item.endUserIds[1]?.username
                      : item.endUserIds[0]?.username,
                  aiteavatar:
                    item.endUserIds[0]?._id == myEndUserId
                      ? item.endUserIds[1]?.avatar
                      : item.endUserIds[0]?.avatar
                }
              });
            }}
          />
        );
      }}
    />
  );
}
