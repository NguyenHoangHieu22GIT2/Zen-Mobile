import FontText from "@/components/common/FontText";
import RectangleButton from "@/components/common/RectangleButton";
import { COLORS, IMAGES } from "@/constants";
import { GroupExtraIsmember } from "@/types/group.type";
import { View, Image, Pressable } from "react-native";

type props = {
  group: GroupExtraIsmember;
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
      className="rounded-2xl pb-2 bg-white border shadow-lg flex-1 border-gray-300 overflow-hidden"
      onPress={onPress}
    >
      <Image
        source={
          group.avatar.length < 10
            ? IMAGES.fakepostimage
            : { uri: process.env.EXPO_PUBLIC_HTTP_UPLOADS + group.avatar }
        }
        className="w-full h-40"
      />
      <View className="px-3 py-1.5">
        <FontText className="font-bold text-lg h-14" numberOfLines={2}>
          {group.name}
        </FontText>
        <FontText className="flex-1">Public group</FontText>
        <RectangleButton
          text={!group.isJoined ? "Join" : "Joined"}
          textStyle="font-bold"
          className={`mt-2 ${group.isJoined && "border border-primary "}`}
          onPress={!group.isJoined ? onJoin : () => {}}
          secondary={group.isJoined}
        />
      </View>
    </Pressable>
  );
}
