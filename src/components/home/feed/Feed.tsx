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
import OptionMenuSVG from "@/components/svg/OptionMenuSVG";
import React, { useRef } from "react";
import CustomBottomSheet from "@/components/common/popup/CustomBottomSheet";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import Comments from "../comment/Comments";
import { Post, PostJson } from "@/types/post.type";
import { timeAgo } from "@/utils/funcs/timeAgo";
import { trycatchAxios } from "@/utils/funcs/trycatchAxios";
import http from "@/libs/axios.base";

type props = {
  post: PostJson;
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
  const post: Post = {
    ...props.post,
    createdAt: new Date(props.post.createdAt),
    updatedAt: new Date(props.post.updatedAt),
  };
  const time = timeAgo(post.createdAt);
  const modalizeRef = useRef<BottomSheetModal>();
  return (
    <View className="px-4 py-3 gap-3 border-b border-gray-200">
      <View className="flex-row items-center justify-between pl-2 ">
        <FeedAvatarImage source={IMAGES.fakeavatar} className="mr-2" />
        <FontText className="font-bold">{post.endUser.username}</FontText>
        <FontText className="flex-1 text-right text-gray-400">{time}</FontText>
        <ToggleCommentsButton
          className="ml-2"
          svgComponent={<OptionMenuSVG />}
          onPress={() => { }}
        />
      </View>
      <FontText className="mx-2 text-2xl">{post.title}</FontText>
      <FontText className="mx-2 text-lg">{post.body}</FontText>
      <FeedImage
        sources={[
          IMAGES.fakepostimage,
          IMAGES.fakepostimage,
          IMAGES.fakepostimage,
          IMAGES.fakepostimage,
          IMAGES.fakepostimage,
        ]}
      />
      <View className="flex-row gap-5 px-3 justify-between">
        <ToggleableReactionButton
          hasActivated={post.hasLiked!}
          canActiveSvgComponent={<HeartSVG />}
          onPress={() => {
            toggleLike();
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
        <ToggleCommentsButton svgComponent={<ShareSVG />} onPress={() => { }} />
        <ToggleableReactionButton
          className="flex-1 flex-row justify-end"
          canActiveSvgComponent={<BookmarkSVG />}
          onPress={() => { }}
        />
      </View>
      <CustomBottomSheet bottomsheetRef={modalizeRef} snapPoint={[600]}>
        <Comments postId={post._id} />
      </CustomBottomSheet>
    </View>
  );
}
export default React.memo(Feed);
