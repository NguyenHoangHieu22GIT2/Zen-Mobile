import { View, FlatList } from "react-native";
import PeopleSearchResultItem from "./PeopleSearchResultItem";
import Feed from "../home/feed/Feed";
import { EndUserSearchMinimal } from "@/types/enduser.type";
import { PostJson } from "@/types/post.type";
import { router } from "expo-router";
import useAddFriend from "@/hook/profile/useAddFriend";

type SearchResultsProps = {
  searchResultArray: (EndUserSearchMinimal | PostJson)[];
};

function isPost(obj): obj is PostJson {
  return obj.endUser !== undefined;
}

export default function SearchResults({
  searchResultArray
}: SearchResultsProps) {
  return (
    <View className="mt-5">
      <FlatList
        contentContainerStyle={{ paddingBottom: 20 }}
        data={searchResultArray}
        renderItem={({ item }) =>
          isPost(item) ? (
            <Feed post={item} />
          ) : (
            <PeopleSearchResultItem
              endUser={item}
              onAddFriend={() => {}}
              onPress={() => router.push(`/profile/${item._id}`)}
            />
          )
        }
        ItemSeparatorComponent={() => (
          <View className=" border-b border-gray-300" />
        )}
      />
    </View>
  );
}
