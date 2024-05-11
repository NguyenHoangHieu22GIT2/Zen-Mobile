import { FlatList } from "react-native-gesture-handler";
import ChatItem from "./ChatItem";
import { View } from "react-native";

export default function Chats() {
  return (
    <FlatList
      ItemSeparatorComponent={() => (
        <View className="border-b border-gray-200 " />
      )}
      data={["1", "2"]}
      keyExtractor={(i) => i}
      renderItem={({ item }) => {
        return <ChatItem />;
      }}
    />
  );
}
