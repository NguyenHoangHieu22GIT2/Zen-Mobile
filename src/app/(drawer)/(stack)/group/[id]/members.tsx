import { FontText } from "@/components";
import ChatSearchBar from "@/components/chat/ChatSearchBar";
import GroupMemberItem from "@/components/group/items/GroupMemberItem";
import { useState } from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default function members() {
  const [search, setSearch] = useState("");
  return (
    <View className="bg-white h-full">
      <View className="px-3">
        <ChatSearchBar onType={(text) => setSearch(text)} />
      </View>
      <FlatList
        data={[1, 2, 3, 4, 5, 6]}
        keyExtractor={(i) => i.toString()}
        renderItem={({ item }) => <GroupMemberItem />}
      />
    </View>
  );
}
