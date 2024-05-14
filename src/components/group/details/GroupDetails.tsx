import FontText from "@/components/common/FontText";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { View } from "react-native";
import GroupMemberAvatars from "./GroupMemberAvatars";
import { GroupDetail } from "@/types/group.type";

type Props = {
  group: GroupDetail;
  onShowMembers: () => void;
};

export default function GroupDetails({ group, onShowMembers }: Props) {
  return (
    <View>
      <FontText className="font-bold text-2xl">About </FontText>
      <FontText className="my-2 text-lg">{group.description} </FontText>
      <View className="flex-row items-center gap-2">
        <FontAwesome size={26} className="" name="globe" />
        <FontText className="my-2 font-bold text-lg">
          {group.isVisible ? "Public" : "Private"}
        </FontText>
      </View>
      <View className="flex-row items-center gap-3">
        <FontAwesome size={26} className="" name="user" />
        <FontText className="my-2 font-bold text-lg">
          {group.numberOfMembers} total members
        </FontText>
      </View>
      <View className="flex-row items-center gap-2">
        <FontAwesome size={26} className="" name="plus-circle" />
        <FontText className="my-2 font-bold text-lg">
          Created on {group.createdAt}
        </FontText>
      </View>
      <View className="border-b border-gray-200 my-4" />
      <FontText className="font-bold text-2xl">Members </FontText>
      <GroupMemberAvatars
        avatars={["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"]}
        className="my-2"
        onPress={onShowMembers}
      />
      <View className="border-b border-gray-200 my-4" />
    </View>
  );
}
