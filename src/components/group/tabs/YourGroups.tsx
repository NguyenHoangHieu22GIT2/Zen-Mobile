import { FlatList, View } from "react-native";
import YourGroupItem from "../items/YourGroupItem";
import { router } from "expo-router";
import FloattingButton from "@/components/home/feed/Buttons/FloattingButton";
import PlusSVG from "@/components/svg/PlusSVG";
import ChatSearchBar from "@/components/chat/ChatSearchBar";
import { useState } from "react";
import { Group } from "@/types/group.type";

const yourGroups: Group[] = [
  {
    _id: "1",
    name: "Group name",
    avatar: "asd",
    members: 33,
    description: "Description",
    isVisible: true,
    createdAt: "as"
  },
  {
    _id: "2",
    name: "Group name",
    avatar: "asd",
    members: 33,
    description: "Description",
    isVisible: true,
    createdAt: "as"
  }
];

export default function YourGroups() {
  const [search, setSearch] = useState("");
  return (
    <View className="w-full h-full bg-white">
      <View className="px-2 py-2">
        <ChatSearchBar
          onType={(text) => {
            setSearch(text);
          }}
        />
      </View>
      <FlatList
        className="w-full"
        data={yourGroups}
        keyExtractor={(i) => i._id}
        ListHeaderComponent={<View className="h-2" />}
        renderItem={({ item }) => (
          <YourGroupItem
            group={item}
            onPress={() => {
              router.push(`group/1`);
            }}
          />
        )}
      />
      <FloattingButton
        onPress={() => {
          router.push("group/create");
        }}
        icon={<PlusSVG width={25} height={25} />}
      />
    </View>
  );
}
