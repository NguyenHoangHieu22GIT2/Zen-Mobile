import FontText from "@/components/common/FontText";
import OptionMenu, { Option } from "@/components/common/popup/OptionMenu";
import BackSvg from "@/components/svg/BackSvg";
import { COLORS } from "@/constants";
import { GroupDetail } from "@/types/group.type";
import { router } from "expo-router";
import { View, Pressable } from "react-native";

type props = {
  group: GroupDetail;
};

export default function GroupHeader({ group }: props) {
  return (
    <View className="flex-row gap-2 bg-white items-center py-1 px-2">
      <Pressable
        android_ripple={{
          color: COLORS.gray,
          borderless: false,
          foreground: true
        }}
        className="rounded-full p-3 overflow-hidden"
        onPress={() => {
          router.back();
        }}
      >
        <BackSvg />
      </Pressable>
      <FontText className="font-bold text-lg flex-1" numberOfLines={1}>
        {group.name}
      </FontText>
      <OptionMenu snapPoint={[250]}>
        <Option icon={<></>} label="Create Event " onPress={() => {}} />
        <Option icon={<></>} label="Setting " onPress={() => {}} />
        <Option icon={<></>} label="Leave group" onPress={() => {}} />
      </OptionMenu>
    </View>
  );
}
