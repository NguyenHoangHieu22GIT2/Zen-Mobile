import { View, Image, ImageSourcePropType, Pressable } from "react-native";
import FontText from "../common/FontText";
import { COLORS } from "@/constants";

export type PeopleSearchResultItemProps = {
  imageSource: ImageSourcePropType;
  name: string;
  description?: string;
};

export default function PeopleSearchResultItem(
  props: PeopleSearchResultItemProps
) {
  const { imageSource, name, description } = props;
  return (
    <Pressable
      android_ripple={{
        color: COLORS.lightgray,
        borderless: false,
        foreground: true
      }}
      onPress={() => {}}
      className="overflow-hidden shadow-xl shadow-gray-400 bg-white my-1 mx-3 px-3 py-1"
    >
      <View className="flex-row items-center gap-4 bg-white my-2">
        <Image source={imageSource} className="w-16 h-16 rounded-full" />
        <View className="flex-1 gap-1">
          <FontText className="font-bold text-xl text-darkblack">
            {name}
          </FontText>
          {description && (
            <FontText
              className="font-bold text-sm text-gray-500 "
              numberOfLines={1}
            >
              {description}
            </FontText>
          )}
        </View>
      </View>
    </Pressable>
  );
}
