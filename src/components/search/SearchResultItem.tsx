import { View, Image, ImageSourcePropType, Pressable } from "react-native";
import FontText from "../common/FontText";
import { COLORS } from "@/constants";

export type SearchResultItemProps = {
  imageSource: ImageSourcePropType;
  name: string;
  description?: string;
};

export default function SearchResultItem(props: SearchResultItemProps) {
  const { imageSource, name, description } = props;
  return (
    <Pressable
      android_ripple={{
        color: COLORS.lightgray,
        borderless: false,
        foreground: true
      }}
      onPress={() => {}}
      className="rounded-xl overflow-hidden shadow-xl shadow-gray-400 bg-white my-2 mx-5 px-3 py-1"
    >
      <View className="flex-row items-center gap-4 bg-white my-2">
        <Image source={imageSource} className="w-24 h-24 rounded-xl" />
        <View className="flex-1 gap-1">
          <FontText className="font-bold text-xl text-darkblack">
            {name}
          </FontText>
          {description && (
            <FontText
              className="font-bold text-sm text-gray-500 "
              numberOfLines={2}
            >
              {description}
            </FontText>
          )}
        </View>
      </View>
    </Pressable>
  );
}
