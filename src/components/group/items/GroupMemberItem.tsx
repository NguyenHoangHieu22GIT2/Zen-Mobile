import FontText from "@/components/common/FontText";
import OptionMenu, { Option } from "@/components/common/popup/OptionMenu";
import { COLORS, IMAGES } from "@/constants";
import { GroupMember } from "@/types/group-member.type";
import { View, Image, Pressable } from "react-native";

type props = {
  member: GroupMember;
  isOwner: boolean;
  onRemoveMember: () => void;
};
export default function GroupMemberItem({
  member,
  onRemoveMember,
  isOwner
}: props) {
  return (
    <Pressable
      android_ripple={{
        color: COLORS.gray2,
        borderless: false,
        foreground: true
      }}
      className="px-3 py-2 flex-row gap-3 items-center overflow-hidden "
    >
      <Image
        className="w-16 h-16 rounded-full border border-gray-300"
        source={
          member.endUser.avatar.length > 8
            ? {
                uri:
                  process.env.EXPO_PUBLIC_HTTP_UPLOADS + member.endUser.avatar
              }
            : IMAGES.fakeavatar
        }
      />
      <View className="flex-1">
        <FontText className="font-bold text-lg">
          {member.endUser.username}
        </FontText>
        <FontText numberOfLines={1} className="text-gray-400">
          {/* {member.isOwner ? "Admin" : "Member"} */}
          {"Member"}
        </FontText>
      </View>
      {isOwner && (
        <OptionMenu snapPoint={[250]}>
          <Option icon={<></>} label="Ban" onPress={() => {}} />
          <Option icon={<></>} label="Block" onPress={() => {}} />
          <Option icon={<></>} label="Remove member" onPress={onRemoveMember} />
        </OptionMenu>
      )}
    </Pressable>
  );
}
