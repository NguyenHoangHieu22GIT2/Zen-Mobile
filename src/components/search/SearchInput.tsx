import { TextInput, TextInputProps, View } from "react-native";
import SearchSVG from "../svg/SearchSVG";
import { COLORS } from "@/constants";

export default function SearchInput(props: TextInputProps) {
  return (
    <View className="flex-row flex-1 gap-3 items-center px-4 py-3">
      <SearchSVG />
      {/* <View className="h-9 w-1 rounded-lg  bg-primary" /> */}
      <TextInput
        className="flex-1 font-bold text-xl placeholder:text-gray-400"
        placeholder="Search.."
        selectionColor={COLORS.primary}
        placeholderTextColor={"gray"}
        {...props}
      />
    </View>
  );
}
