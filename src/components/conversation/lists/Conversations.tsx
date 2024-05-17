import { FlatList } from "react-native-gesture-handler";
import { RefreshControl, View } from "react-native";
import { router } from "expo-router";
import ConversationItem from "../items/ConversationItem";
import useFetchConversations from "@/hook/chat/useFetchConversations";
import { COLORS } from "@/constants";

export default function Conversations() {
  const { data, isRefreshing, refreshConversation } = useFetchConversations();
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
              router.push("/conversation/" + item._id);
            }}
          />
        );
      }}
    />
  );
}
