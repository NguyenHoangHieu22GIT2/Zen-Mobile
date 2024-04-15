import { FontText, SearchInput, TopWrapperView } from "@/components";
import FilterButton from "@/components/search/FilterButton";
import SearchResults from "@/components/search/SearchResults";
import { IMAGES } from "@/constants";
import { useRef, useState } from "react";
import { View } from "react-native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import CustomBottomSheet from "@/components/common/popup/CustomBottomSheet";

export default function SearchPage() {
  const [input, setInput] = useState<string>();
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
      <CustomBottomSheet bottomsheetRef={modalizeRef} snapPoint={[200]}>
        <FontText>Awesome 🎉</FontText>
      </CustomBottomSheet>
    </TopWrapperView>
  );
}
