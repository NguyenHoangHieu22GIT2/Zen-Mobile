import { IMAGES } from "@/constants";
import { Image, View, ViewProps } from "react-native";
import FontText from "./FontText";

export default function BigZenLogo(props: ViewProps) {
  const { className, ...otherProps } = props;
  return (
    <View className={`flex-col items-center ${className}`} {...otherProps}>
      <Image source={IMAGES.zenlogo} className="w-24 h-20" />
      <FontText className="text-lightblack font-semibold text-4xl mt-2">
        Zen
      </FontText>
    </View>
  );
}
