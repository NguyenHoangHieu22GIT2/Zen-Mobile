import { View, FlatList } from "react-native";
import { GroupSearchResultItemProps } from "./GroupSearchResultItem";
import GroupSearchResultItem from "./GroupSearchResultItem";
import { SearchResultType } from "@/app/(drawer)/(stack)/(nav-tabs)/search";
import PeopleSearchResultItem from "./PeopleSearchResultItem";
import Feed from "../home/feed/Feed";

type SearchResultsProps = {
  searchResultArray: GroupSearchResultItemProps[];
  type: SearchResultType;
};

export default function SearchResults(props: SearchResultsProps) {
  return (
    <View className="mt-5">
      <FlatList
        contentContainerStyle={{ paddingBottom: 20 }}
        data={props.searchResultArray}
        renderItem={({ item }) =>
          props.type == "people" ? (
            <PeopleSearchResultItem
              imageSource={item.imageSource}
              name={item.name}
              description={item.description}
            />
          ) : props.type == "group" ? (
            <GroupSearchResultItem
              imageSource={item.imageSource}
              name={item.name}
              description={item.description}
            />
          ) : (
            <Feed />
          )
        }
      />
    </View>
  );
}
