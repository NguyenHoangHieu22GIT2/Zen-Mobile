import { FontText, SearchInput, TopWrapperView } from "@/components";
import FilterButton from "@/components/search/FilterButton";
import SearchResults from "@/components/search/SearchResults";
import { useRef } from "react";
import { ActivityIndicator, View } from "react-native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import CustomBottomSheet from "@/components/common/popup/CustomBottomSheet";
import Selector, { SelectItem } from "@/components/common/popup/Selector";
import useSearchUserAndPost from "@/hook/search/useSearchUserAndPost";

import { COLORS } from "@/constants";

export default function SearchPage() {
  const modalizeRef = useRef<BottomSheetModal>();
  const {
    results,
    isLoading,
    changeInput,
    changeSearchType,
    searchInput,
    searchType
  } = useSearchUserAndPost();
  return (
    <TopWrapperView className="h-full">
      <View className="bg-white h-full">
        <View className="flex-row items-center mx-2">
          <SearchInput
            onChangeText={(value) => {
              changeInput(value);
            }}
            value={searchInput}
          />
          <FilterButton
            onPress={() => {
              modalizeRef.current?.present();
            }}
          />
        </View>
        {isLoading && <ActivityIndicator size="large" color={COLORS.primary} />}
        <SearchResults searchResultArray={results} />
      </View>

      <CustomBottomSheet bottomsheetRef={modalizeRef} snapPoint={[220]}>
        <FontText className="border-b border-gray-300 w-full text-center py-3 text-lg font-bold">
          Choose the category
        </FontText>
        <Selector
          onValueChange={(value) => {
            changeSearchType(value);
            modalizeRef.current.close();
          }}
          defaultValue={searchType}
        >
          <SelectItem name="People" value="people" />
          <SelectItem name="Post" value="post" />
        </Selector>
      </CustomBottomSheet>
    </TopWrapperView>
  );
}
