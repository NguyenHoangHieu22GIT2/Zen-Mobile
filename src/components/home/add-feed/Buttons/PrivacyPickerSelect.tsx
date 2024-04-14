import DownArrowSVG from "@/components/svg/DownArrowSVG";
import { COLORS } from "@/constants";
import { View } from "react-native";
import RNPickerSelect from "react-native-picker-select";

type PrivacyPickerSelect = {
  onValueChange: (string) => void;
};

export default function PrivacyPickerSelect(props: PrivacyPickerSelect) {
  return (
    <View className="flex-row items-center gap-2">
      <RNPickerSelect
        onValueChange={props.onValueChange}
        useNativeAndroidPickerStyle={false}
        placeholder={{}}
        items={[
          {
            label: "Public (anyone can see your post)",
            value: "public",
            key: "public"
          },
          {
            label: "Private (you are the only viewer)",
            value: "private",
            key: "private"
          }
        ]}
      />
      <DownArrowSVG width={15} height={15} strokeColor={COLORS.gray} />
    </View>
  );
}
