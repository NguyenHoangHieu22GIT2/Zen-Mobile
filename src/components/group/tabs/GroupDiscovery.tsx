import { FlatList, ImageBackground, RefreshControl } from "react-native";
import GroupDiscoveryItem from "../items/GroupDiscoveryItem";
import { COLORS, IMAGES } from "@/constants";
import { View } from "react-native";
import ChatSearchBar from "@/components/conversation/inputs/ConverationSearchBar";
import { useState } from "react";
import { router } from "expo-router";
import useFetchRecommendGroups from "@/hook/group/useFetchRecommendGroups";
import useGroupEntryActions from "@/hook/group/useGroupEntryActions";

export default function GroupDiscovery() {
  const [search, setSearch] = useState("");
  const { groups, fetchMoreGroup, refreshGroups, isRefreshing } =
    useFetchRecommendGroups();
  const { joinGroup } = useGroupEntryActions();
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
            onJoin={() => {
              joinGroup(item);
            }}
            onPress={() => router.push(`group/${item._id}`)}
          />
        )}
        onEndReached={fetchMoreGroup}
        onEndReachedThreshold={0.5}
        refreshControl={
          <RefreshControl
            colors={[COLORS.primary]}
            refreshing={isRefreshing}
            onRefresh={() => {
              refreshGroups();
            }}
          />
        }
      />
    </ImageBackground>
  );
}
