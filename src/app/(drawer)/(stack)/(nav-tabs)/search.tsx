import { FontText, SearchInput, TopWrapperView } from "@/components";
import FilterButton from "@/components/search/FilterButton";
import SearchResults from "@/components/search/SearchResults";
import { IMAGES } from "@/constants";
import { useRef, useState } from "react";
import { View } from "react-native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import CustomBottomSheet from "@/components/common/popup/CustomBottomSheet";
import Selector, { SelectItem } from "@/components/common/popup/Selector";

export type SearchResultType = "people" | "group" | "post";

export default function SearchPage() {
  const [input, setInput] = useState<string>();
  const [resultType, setResultType] = useState<SearchResultType>("people");
  const modalizeRef = useRef<BottomSheetModal>();
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
            modalizeRef.current?.present();
          }}
        />
      </View>
      <SearchResults
        type={resultType}
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
      <CustomBottomSheet bottomsheetRef={modalizeRef} snapPoint={[220]}>
        <FontText className="border-b border-gray-300 w-full text-center py-3 text-lg font-bold">
          Choose the category
        </FontText>
        <Selector
          onValueChange={(value) => {
            setResultType(value);
            modalizeRef.current.close();
          }}
          defaultValue={resultType}
        >
          <SelectItem name="People" value="people" />
          <SelectItem name="Group" value="group" />
          <SelectItem name="Post" value="post" />
        </Selector>
      </CustomBottomSheet>
    </TopWrapperView>
  );
}
