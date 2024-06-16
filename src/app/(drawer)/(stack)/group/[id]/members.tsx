import ChatSearchBar from "@/components/conversation/inputs/ConverationSearchBar";
import GroupMemberItem from "@/components/group/items/GroupMemberItem";
import useFetchGroupMembers from "@/hook/group/useFetchGroupMembers";
import { useAuthStore } from "@/libs/zustand/auth.zustand";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default function members() {
  const [search, setSearch] = useState("");
  const { id, ownerId } = useLocalSearchParams();
  const myEnduserId = useAuthStore((state) => state.endUser._id);
  const { data, isLoading, deleteGroupMember, mutate } = useFetchGroupMembers(
    id as string
  );
  console.log(ownerId, "***");
  if (isLoading) {
    return <View></View>;
  }
  return (
    <View className="bg-white h-full">
      <View className="px-3">
        <ChatSearchBar onType={(text) => setSearch(text)} />
      </View>
      <FlatList
        data={data}
        keyExtractor={(i) => i.toString()}
        renderItem={({ item }) => (
          <GroupMemberItem
            member={item}
            isOwner={myEnduserId === ownerId}
            onRemoveMember={async () => {
              await deleteGroupMember(item.endUser._id);
              mutate();
            }}
          />
        )}
      />
    </View>
  );
}
