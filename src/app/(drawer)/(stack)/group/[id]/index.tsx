import {
  FloattingButton,
  FontText,
  PlusSVG,
  RectangleButton,
  RightArrowSVG
} from "@/components";
import CustomBottomSheet from "@/components/common/popup/CustomBottomSheet";
import { IMAGES } from "@/constants";
import { BottomSheetModal, BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { useRef } from "react";
import { View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";
import GroupHeader from "@/components/group/details/GroupHeader";
import GroupDetails from "@/components/group/details/GroupDetails";
import useFetchGroupDetail from "@/hook/group/useFetchGroupDetail";
import useGroupEntryActions from "@/hook/group/useGroupEntryActions";
import GroupPosts from "@/components/group/details/GroupPosts";

export default function GroupDetail() {
  const bottomsheetRef = useRef<BottomSheetModal>();
  const { id } = useLocalSearchParams();
  const { data, isOwner, isLoading } = useFetchGroupDetail(id as string);
  const { joinGroup, leaveGroup } = useGroupEntryActions();

  const GroupInforAbovePosts = () => (
    <View className="bg-white gap-2">
      <Image
        source={
          data.group.avatar.length < 10
            ? IMAGES.fakepostimage
            : { uri: process.env.EXPO_PUBLIC_HTTP_UPLOADS + data.group.avatar }
        }
        className="w-full h-56"
      />
      <View className="px-3 py-1 gap-2">
        <FontText
          onPress={() => {
            bottomsheetRef?.current.present();
          }}
          className="font-bold text-2xl"
        >
          {data?.group?.name}
          <RightArrowSVG height={15} width={20} strokeColor={"black"} />
        </FontText>
        <FontText className="text-gray-600 text-lg">
          {data.group.isVisible ? "Public" : "Private"} •{" "}
          <FontText>{data.numOfMembers}</FontText> members
        </FontText>
        <View className="flex-row gap-3">
          <RectangleButton
            text={data?.isJoined ? "Joined" : "Join"}
            textStyle="font-bold"
            className="w-full border border-gray-300"
            disabled={data?.isJoined}
            secondary={data?.isJoined}
            onPress={() => {
              joinGroup(data.group);
            }}
          />
        </View>
      </View>
      <View className="my-2 px-3 py-2 bg-white">
        <FontText className="font-bold text-xl">Group posts</FontText>
      </View>
    </View>
  );
  if (isLoading) return <></>;
  if (!data) return <></>;
  return (
    <SafeAreaView className="h-full">
      <GroupHeader
        data={data}
        onLeaveGroup={() => {
          leaveGroup(data.group._id);
        }}
        isOwner={isOwner}
      />
      {data?.isJoined || data.group.isVisible ? (
        <GroupPosts
          groupId={data.group._id}
          ListHeaderComponent={<GroupInforAbovePosts />}
        />
      ) : (
        <FontText>You are not a member of this group to see the posts</FontText>
      )}
      {data.isJoined && (
        <FloattingButton
          onPress={() => {
            router.push("group/" + id + "/create-post");
          }}
          icon={<PlusSVG width={25} height={25} />}
        />
      )}

      <CustomBottomSheet bottomsheetRef={bottomsheetRef} snapPoint={[700]}>
        <BottomSheetScrollView className="px-3 pt-5">
          <GroupDetails
            data={data}
            onShowMembers={() => {
              router.push({
                pathname: `group/${data.group._id}/members`,
                params: { ownerId: data.group.endUserId }
              });
              bottomsheetRef?.current.dismiss();
            }}
          />
        </BottomSheetScrollView>
      </CustomBottomSheet>
    </SafeAreaView>
  );
}
