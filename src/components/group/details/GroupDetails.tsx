import FontText from "@/components/common/FontText";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { View } from "react-native";
import GroupMemberAvatars from "./GroupMemberAvatars";

type Props = {
  onShowMembers: () => void;
};

export default function GroupDetails({ onShowMembers }: Props) {
  return (
    <View>
      <FontText className="font-bold text-2xl">About </FontText>
      <FontText className="my-2 text-lg">This is a group </FontText>
      <View className="flex-row items-center gap-2">
        <FontAwesome size={26} className="" name="globe" />
        <FontText className="my-2 font-bold text-lg">Public</FontText>
      </View>
      <View className="flex-row items-center gap-3">
        <FontAwesome size={26} className="" name="user" />
        <FontText className="my-2 font-bold text-lg">
          33K total members
        </FontText>
      </View>
      <View className="flex-row items-center gap-2">
        <FontAwesome size={26} className="" name="plus-circle" />
        <FontText className="my-2 font-bold text-lg">
          Created on August 4, 2021
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
