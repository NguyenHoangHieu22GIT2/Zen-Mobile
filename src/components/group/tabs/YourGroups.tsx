import { FlatList, RefreshControl, View } from "react-native";
import YourGroupItem from "../items/YourGroupItem";
import { router } from "expo-router";
import FloattingButton from "@/components/home/feed/Buttons/FloattingButton";
import PlusSVG from "@/components/svg/PlusSVG";
import useFetchYourGroups from "@/hook/group/useFetchYourGroups";
import { COLORS } from "@/constants";

export default function YourGroups() {
  const { groups, fetchMoreGroup, refreshGroups, isRefreshing } =
    useFetchYourGroups();
  return (
    <View className="w-full h-full bg-white">
      <View className="px-2 py-2" />
      <FlatList
        className="w-full"
        data={groups}
        keyExtractor={(i) => i._id}
        ListHeaderComponent={<View className="h-2" />}
        renderItem={({ item }) => (
          <YourGroupItem
            group={item}
            onPress={() => {
              router.push(`group/${item._id}`);
            }}
          />
        )}
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
      <FloattingButton
        onPress={() => {
          router.push("group/create");
        }}
        icon={<PlusSVG width={25} height={25} />}
      />
    </View>
  );
}
