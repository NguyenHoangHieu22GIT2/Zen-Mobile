import FontText from "@/components/common/FontText";
import { COLORS, IMAGES } from "@/constants";
import { Group } from "@/types/group.type";
import { View, Pressable, Image } from "react-native";

type Props = {
  group: Group;
  onPress?: () => void;
};

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
      <Image className="rounded-2xl h-14 w-14" source={IMAGES.fakepostimage} />
      <View>
        <FontText className="font-bold text-lg">{group.name}</FontText>
        <FontText className="">{group.members} members</FontText>
      </View>
    </Pressable>
  );
}
