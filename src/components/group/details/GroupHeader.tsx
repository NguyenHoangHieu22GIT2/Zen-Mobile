import FontText from "@/components/common/FontText";
import OptionMenu, { Option } from "@/components/common/popup/OptionMenu";
import BackSvg from "@/components/svg/BackSvg";
import { COLORS } from "@/constants";
import { GroupDetail } from "@/types/group.type";
import { router } from "expo-router";
import { View, Pressable } from "react-native";

type props = {
  data: GroupDetail;
  onLeaveGroup: () => void;
  isOwner: boolean;
};

export default function GroupHeader({ data, onLeaveGroup, isOwner }: props) {
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
        {data.group.name}
      </FontText>
      {data.isJoined && (
        <OptionMenu snapPoint={[150]}>
          {isOwner && (
            <Option icon={<></>} label="Edit group" onPress={() => {}} />
          )}
          {/* {!isOwner && (
            <Option icon={<></>} label="Leave group" onPress={onLeaveGroup} />
          )} */}
        </OptionMenu>
      )}
    </View>
  );
}
