import { View, TextInput, ViewProps } from "react-native";
import MagnifyingGlassSVG from "../../svg/MagnifyingGlassSVG";
import { COLORS } from "@/constants";
type props = {
  onType: (text: string) => void;
};
export default function ConversationSearchBar({
  className,
  onType
}: ViewProps & props) {
  return (
    <View className={`flex-row gap-2 items-center justify-center ${className}`}>
      <MagnifyingGlassSVG
        fillColor={COLORS.gray2}
        height={25}
        width={25}
        isActive={false}
      />
      <TextInput
        placeholder="Search"
        cursorColor={COLORS.primary}
        className="bg-gray-100 rounded-full px-4 py-2 w-full flex-1"
        onChangeText={(text) => {
          onType(text);
        }}
      />
    </View>
  );
}
