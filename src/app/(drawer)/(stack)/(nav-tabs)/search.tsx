import { FontText, SearchInput, TopWrapperView } from "@/components";
import FilterButton from "@/components/search/FilterButton";
import SearchResults from "@/components/search/SearchResults";
import { IMAGES } from "@/constants";
import { useRef, useState } from "react";
import { View } from "react-native";
import { Modalize } from "react-native-modalize";
import { Portal } from "react-native-portalize";

export default function SearchPage() {
  const [input, setInput] = useState<string>();
  const modalizeRef = useRef<Modalize>();
  return (
    <TopWrapperView className="h-full">
      <View className="flex-row items-center mx-2">
        <SearchInput
          onChangeText={(value) => {
            setInput(value);
          }}
          value={input}
        />
        <FilterButton
          onPress={() => {
            modalizeRef.current?.open();
          }}
        />
      </View>
      <SearchResults
        searchResultArray={[
          {
            imageSource: IMAGES.fakepostimage,
            name: "A group",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor"
          },
          {
            imageSource: IMAGES.fakepostimage,
            name: "A group",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor"
          }
        ]}
      />
      <Portal>
        <Modalize
          ref={modalizeRef}
          snapPoint={300}
          flatListProps={{
            data: ["asd", "asds", "asdasd", "zxc", "qweqwe", "jkjl", "fff"],
            renderItem: ({ item }) => (
              <View>
                <FontText>{item}</FontText>
              </View>
            ),
            keyExtractor: (item) => item,
            showsVerticalScrollIndicator: false
          }}
          adjustToContentHeight
        />
      </Portal>
    </TopWrapperView>
  );
}
