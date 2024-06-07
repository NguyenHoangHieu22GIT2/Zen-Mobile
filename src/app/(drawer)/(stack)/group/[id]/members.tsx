import ChatSearchBar from "@/components/conversation/inputs/ConverationSearchBar";
import GroupMemberItem from "@/components/group/items/GroupMemberItem";
import useFetchGroupMembers from "@/hook/group/useFetchGroupMembers";
import useGroupOwnerMemberActions from "@/hook/group/useGroupOwnerMemberActions";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default function members() {
  const [search, setSearch] = useState("");
  const { id } = useLocalSearchParams();
  const { data, isLoading } = useFetchGroupMembers(id as string);
  const { kickMember } = useGroupOwnerMemberActions(id as string);

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
            onRemoveMember={() => {
              kickMember(item._id);
            }}
          />
        )}
      />
    </View>
  );
}
