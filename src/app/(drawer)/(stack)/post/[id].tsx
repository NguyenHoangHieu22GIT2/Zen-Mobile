import {
  BookmarkSVG,
  FontText,
  HeartSVG,
  OptionMenuSVG,
  ShareSVG
} from "@/components";
import Comments from "@/components/home/comment/Comments";
import ToggleCommentsButton from "@/components/home/feed/Buttons/ToggleCommentsButton";
import ToggleableReactionButton from "@/components/home/feed/Buttons/ToggleableReactionButton";
import FeedAvatarImage from "@/components/home/feed/Images/FeedAvatarImage";
import FeedImage from "@/components/home/feed/Images/FeedImage";
import { IMAGES } from "@/constants";
import http from "@/libs/axios.base";
import { Post } from "@/types/post.type";
import { convertPostDataToFeedfield } from "@/utils/funcs/convertPostDataToFeedfield";
import { trycatchAxios } from "@/utils/funcs/trycatchAxios";
import { View } from "react-native";

type props = {
  post: Post;
};

export default function FeedDetail(props: props) {
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

  return (
    <View className="px-5 py-3.5 gap-3 border rounded-3xl bg-white border-gray-200">
      <View className="flex-row items-center justify-between pl-2 ">
        <FeedAvatarImage source={IMAGES.fakeavatar} className="mr-2" />
        <FontText className="font-bold">{post.endUser.username}</FontText>
        <FontText className="flex-1 text-right text-gray-400">
          {post.postAge}
        </FontText>
        <ToggleCommentsButton
          className="ml-2"
          svgComponent={<OptionMenuSVG />}
          onPress={() => {}}
        />
      </View>
      <FontText className="mx-2 mt-2.5 text-xl font-bold">
        {post.title}
      </FontText>
      <FontText className="mx-2 mb-3 text-lg ">{post.body}</FontText>
      <FeedImage sourceURIs={post.images} />

      <View className="flex-row gap-5 px-3 justify-between">
        <ToggleableReactionButton
          hasActivated={post.hasLiked!}
          canActiveSvgComponent={<HeartSVG />}
          onPress={() => {
            toggleLike();
            console.log(post.images);
          }}
        />
        <ToggleCommentsButton svgComponent={<ShareSVG />} onPress={() => {}} />

        <ToggleableReactionButton
          className="flex-1 flex-row justify-end"
          canActiveSvgComponent={<BookmarkSVG />}
          onPress={() => {}}
        />
      </View>

      <Comments postId={post._id} />
    </View>
  );
}
