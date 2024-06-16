import FontText from "@/components/common/FontText";
import { COLORS, IMAGES } from "@/constants";
import { Group } from "@/types/group.type";
import { View, Pressable, Image } from "react-native";

type Props = {
  group: Group;
  onPress?: () => void;
};
console.log(process.env.EXPO_PUBLIC_HTTP_UPLOADS);
export default function YourGroupItem({ onPress, group }: Props) {
  return (
    <Pressable
      android_ripple={{
        color: COLORS.gray2,
        borderless: false,
        foreground: true
      }}
      className="overflow-hidden flex-row gap-2 py-2 px-4 bg-white rounded-xl"
      onPress={onPress}
    >
      <Image
        className="rounded-2xl h-16 w-16"
        source={
          group.avatar.length < 10
            ? IMAGES.fakepostimage
            : { uri: process.env.EXPO_PUBLIC_HTTP_UPLOADS + group.avatar }
        }
      />
      <View>
        <FontText className="font-bold text-xl">{group.name}</FontText>
        <FontText className="text-lg">
          {group.isVisible ? "Public" : "Private"}
        </FontText>
      </View>
    </Pressable>
  );
}
