import FontText from "@/components/common/FontText";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { View } from "react-native";
import GroupMemberAvatars from "./GroupMemberAvatars";
import { GroupDetail } from "@/types/group.type";
import { COLORS } from "@/constants";

type Props = {
  data: GroupDetail;
  onShowMembers: () => void;
};

export default function GroupDetails({ data, onShowMembers }: Props) {
  return (
    <View>
      <FontText className="font-bold text-2xl">About </FontText>
      <FontText className="my-2 text-lg">{data.group.description} </FontText>
      <View className="flex-row items-center gap-2">
        <FontAwesome size={26} className="" name="globe" color={COLORS.gray} />
        <FontText className="my-2 font-bold text-gray text-lg">
          {data.group.isVisible ? "Public" : "Private"}
        </FontText>
      </View>
      <View className="flex-row items-center gap-3">
        <FontAwesome size={26} className="" name="user" color={COLORS.gray} />
        <FontText className="my-2 font-bold text-gray text-lg">
          {data.numOfMembers} total members
        </FontText>
      </View>
      <View className="flex-row items-center gap-2">
        <FontAwesome
          size={26}
          className=""
          name="plus-circle"
          color={COLORS.gray}
        />
        <FontText className="my-2 font-bold text-gray text-lg">
          Created on {new Date(data.group.createdAt).toDateString()}
        </FontText>
      </View>
      <View className="border-b border-gray-200 my-4" />
      {(data?.isJoined || data.group.isVisible) && (
        <>
          <FontText className="font-bold text-2xl">
            Members ({data.numOfMembers})
          </FontText>
          <GroupMemberAvatars
            maxAvatarDisplay={4}
            memberLength={data.numOfMembers}
            avatars={new Array(data.numOfMembers).fill("a")}
            className="my-2"
            onPress={onShowMembers}
          />
        </>
      )}
      <View className="border-b border-gray-200 my-4" />
    </View>
  );
}
