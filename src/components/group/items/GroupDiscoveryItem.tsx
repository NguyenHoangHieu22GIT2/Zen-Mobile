import FontText from "@/components/common/FontText";
import RectangleButton from "@/components/common/RectangleButton";
import { COLORS, IMAGES } from "@/constants";
import { Group } from "@/types/group.type";
import { View, Image, Pressable } from "react-native";

type props = {
  group: Group;
  onPress: () => void;
  onJoin: () => void;
};

export default function GroupDiscoveryItem({ group, onPress, onJoin }: props) {
  return (
    <Pressable
      android_ripple={{
        color: COLORS.gray2,
        borderless: false,
        foreground: true
      }}
      className="rounded-2xl pb-2 bg-white border flex-1 border-gray-300 overflow-hidden"
      onPress={onPress}
    >
      <Image source={IMAGES.fakepostimage} className="w-full h-40" />
      <View className="px-3 py-1.5">
        <FontText className="font-bold text-lg" numberOfLines={2}>
          {group.name}
        </FontText>
        <FontText>Public group</FontText>
        <FontText>{group.members} members</FontText>
        <RectangleButton
          text="Join"
          textStyle="font-bold"
          className="mt-2"
          onPress={onJoin}
        />
      </View>
    </Pressable>
  );
}
