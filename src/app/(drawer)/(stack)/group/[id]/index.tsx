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
  const { data, isLoading, error } = useFetchGroupDetail(id as string);
  const { joinGroup, leaveGroup } = useGroupEntryActions();

  if (isLoading) {
    return (
      <View>
        <FontText>Loading...</FontText>
      </View>
    );
  }
  if (error) {
    return (
      <View>
        <FontText>{error.message}</FontText>
      </View>
    );
  }

  const GroupInforAbovePosts = () => (
    <View className="bg-white gap-2">
      <Image source={IMAGES.fakepostimage} className="w-full h-56" />
      <View className="px-3 py-1 gap-2">
        <FontText
          onPress={() => {
            bottomsheetRef?.current.present();
          }}
          className="font-bold text-2xl"
        >
          {data?.name}
          <RightArrowSVG height={15} width={20} strokeColor={"black"} />
        </FontText>
        <FontText className="text-gray-400">
          {data.isVisible ? "Public" : "Private"} •{" "}
          <FontText>{data.numberOfMembers}</FontText> members
        </FontText>
        <View className="flex-row gap-3">
          <RectangleButton
            text={data.isMember ? "Joined" : "Join"}
            textStyle="font-bold"
            className="w-full border border-gray-300"
            disabled={data.isMember}
            secondary={data.isMember}
            onPress={() => {
              joinGroup(data._id);
            }}
          />
        </View>
      </View>
      <View className="my-2 px-3 py-2 bg-white">
        <FontText className="font-bold text-xl">Group posts</FontText>
      </View>
    </View>
  );
  return (
    <SafeAreaView className="h-full">
      <GroupHeader
        group={data}
        onLeaveGroup={() => {
          leaveGroup(data._id);
        }}
      />
      {data.isMember || data.isVisible ? (
        <GroupPosts
          groupId={data._id}
          ListHeaderComponent={<GroupInforAbovePosts />}
        />
      ) : (
        <FontText>You are not a member of this group to see the posts</FontText>
      )}
      <FloattingButton
        onPress={() => {
          router.push("group/1/create-post");
        }}
        icon={<PlusSVG width={25} height={25} />}
      />
      <CustomBottomSheet bottomsheetRef={bottomsheetRef} snapPoint={[700]}>
        <BottomSheetScrollView className="px-3 pt-5">
          <GroupDetails
            group={data}
            onShowMembers={() => {
              router.push("group/1/members");
              bottomsheetRef?.current.dismiss();
            }}
          />
        </BottomSheetScrollView>
      </CustomBottomSheet>
    </SafeAreaView>
  );
}
