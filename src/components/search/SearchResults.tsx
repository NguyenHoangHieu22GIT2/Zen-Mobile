import { View, FlatList } from "react-native";
import SearchResultItem, { SearchResultItemProps } from "./SearchResultItem";

type SearchResultsProps = {
  searchResultArray: SearchResultItemProps[];
};

export default function SearchResults(props: SearchResultsProps) {
  return (
    <View className="mt-5">
      <FlatList
        contentContainerStyle={{ paddingBottom: 20 }}
        data={props.searchResultArray}
        renderItem={({ item }) => (
          <SearchResultItem
            imageSource={item.imageSource}
            name={item.name}
            description={item.description}
          />
        )}
      />
    </View>
  );
}
