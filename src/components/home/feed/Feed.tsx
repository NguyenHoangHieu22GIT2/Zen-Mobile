import FontText from "@/components/common/FontText";
import { View } from "react-native";
import { IMAGES } from "@/constants";
import FeedImage from "./Images/FeedImage";
import FeedAvatarImage from "./Images/FeedAvatarImage";
import ToggleableReactionButton from "./Buttons/ToggleableReactionButton";
import HeartSVG from "@/components/svg/HeartSVG";
import BookmarkSVG from "@/components/svg/BookmarkSVG";
import ToggleCommentsButton from "./Buttons/ToggleCommentsButton";
import CommentSVG from "@/components/svg/CommentSVG";
import ShareSVG from "@/components/svg/ShareSVG";
import React, { useRef } from "react";
import CustomBottomSheet from "@/components/common/popup/CustomBottomSheet";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import Comments from "../comment/Comments";
import { PostJson } from "@/types/post.type";
import { trycatchAxios } from "@/utils/funcs/trycatchAxios";
import http from "@/libs/axios.base";
import { convertPostDataToFeedfield } from "@/utils/funcs/convertPostDataToFeedfield";
import OptionMenu, { Option } from "@/components/common/popup/OptionMenu";
import { router } from "expo-router";
import { useAuthStore } from "@/libs/zustand/auth.zustand";
import toast from "@/utils/toast/toast";

type props = {
  post: PostJson;
  onDelete?: () => void;
};

function Feed(props: props) {
  const toggleLike = async () => {
    trycatchAxios(async () => {
      const result = await http.post(
        process.env.EXPO_PUBLIC_HTTP_ENDPOINT_BASE_LIKE,
        { postId: post._id }
      );
      return result;
    });
  };
  const post = convertPostDataToFeedfield(props.post);
  const myEndUser = useAuthStore((state) => state.endUser);

  const modalizeRef = useRef<BottomSheetModal>();

  return (
    <View className="px-5 py-3.5 gap-3 border rounded-3xl bg-white border-gray-200">
      <View className="flex-row items-center justify-between pl-2 ">
        <FeedAvatarImage source={IMAGES.fakeavatar} className="mr-2" />
        <FontText className="font-bold">{post.endUser.username}</FontText>
        <FontText className="flex-1 text-right text-gray-400">
          {post.postAge}
        </FontText>
        {/* <ToggleCommentsButton
          className="ml-2"
          svgComponent={<OptionMenuSVG />}
          onPress={() => {
            if (post.endUser._id == myEndUser._id)
              editmodalizeRef.current?.present();
          }}
        /> */}
        {post.endUser._id == myEndUser._id && (
          <OptionMenu snapPoint={[200]}>
            <Option
              icon={<></>}
              label="Edit post"
              onPress={() => {
                router.push(`/post/${post._id}/edit`);
              }}
            />
            <Option
              icon={<></>}
              label="Delete post"
              onPress={async () => {
                return trycatchAxios(async () => {
                  const result = await http.delete("/posts/" + post._id);
                  toast.success({ message: "Delete successfully" });
                  props.onDelete();
                  return result;
                });
              }}
            />
          </OptionMenu>
        )}
      </View>
      <FontText className="mx-2 mt-2.5 text-xl font-bold">
        {post.title}
      </FontText>
      <FontText className="mx-2 mb-3 text-lg ">{post.body}</FontText>
      <FeedImage sourceURIs={post.images} />

      <View className="flex-row gap-5 px-3 justify-between">
        <ToggleableReactionButton
          hasActivated={post.hasLiked}
          number={post.numOfLikes}
          canActiveSvgComponent={<HeartSVG />}
          onPress={() => {
            toggleLike();
            console.log(post.images);
          }}
        />
        <ToggleCommentsButton
          svgComponent={
            <CommentSVG width={20} height={19} strokeColor={"#BDBDBD"} />
          }
          onPress={() => {
            modalizeRef.current?.present();
          }}
        />
        <ToggleCommentsButton svgComponent={<ShareSVG />} onPress={() => {}} />
        <ToggleableReactionButton
          className="flex-1 flex-row justify-end"
          canActiveSvgComponent={<BookmarkSVG />}
          onPress={() => {}}
        />
      </View>
      <CustomBottomSheet bottomsheetRef={modalizeRef} snapPoint={[600]}>
        <Comments postId={post._id} />
      </CustomBottomSheet>
    </View>
  );
}
export default React.memo(Feed);
