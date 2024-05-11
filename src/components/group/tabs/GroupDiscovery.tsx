import { FlatList, ImageBackground } from "react-native";
import GroupDiscoveryItem from "../items/GroupDiscoveryItem";
import { IMAGES } from "@/constants";
import { View } from "react-native";
import ChatSearchBar from "@/components/chat/ChatSearchBar";
import { useState } from "react";
import { router } from "expo-router";
import { Group } from "@/types/group.type";

const groups: Group[] = [
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
export default function GroupDiscovery() {
  const [search, setSearch] = useState("");
  return (
    <ImageBackground source={IMAGES.appbackground} className="w-full h-full">
      <View className="px-2 py-2">
        <ChatSearchBar
          onType={(text) => {
            setSearch(text);
          }}
        />
      </View>
      <FlatList
        className="w-full"
        data={groups}
        keyExtractor={(i) => i._id}
        numColumns={2}
        columnWrapperStyle={{
          marginHorizontal: 10,
          marginVertical: 10,
          gap: 20
        }}
        renderItem={({ item }) => (
          <GroupDiscoveryItem
            group={item}
            onJoin={() => {}}
            onPress={() => router.push("group/1")}
          />
        )}
      />
    </ImageBackground>
  );
}
