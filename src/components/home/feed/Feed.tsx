import FontText from "@/components/common/FontText";
import { View } from "react-native";
import { IMAGES } from "@/constants";
import FeedImage from "./Images/FeedImage";
import FeedAvatarImage from "./Images/FeedAvatarImage";
import ToggleableReactionButton from "./Buttons/ToggleableReactionButton";
import HeartSVG from "@/components/svg/HeartSVG";
import BookmarkSVG from "@/components/svg/BookmarkSVG";
import UnToggleableReactionButton from "./Buttons/UnToggleableReactionButton";
import CommentSVG from "@/components/svg/CommentSVG";
import ShareSVG from "@/components/svg/ShareSVG";
import OptionMenuSVG from "@/components/svg/OptionMenuSVG";
import { Modalize } from "react-native-modalize";
import { useRef } from "react";

export default function Feed() {
  const modalizeRef = useRef<Modalize>();
  return (
    <View className="px-4 py-3 gap-3 border-b border-gray-200">
      <View className="flex-row items-center justify-between pl-2 ">
        <FeedAvatarImage source={IMAGES.fakeavatar} className="mr-2" />
        <FontText className="font-bold">Thanh Pham</FontText>
        <FontText className="flex-1 text-right text-gray-400">
          1 hour ago
        </FontText>
        <UnToggleableReactionButton
          className="ml-2"
          svgComponent={<OptionMenuSVG />}
          onPress={() => {}}
        />
      </View>
      <FontText className="mx-2">I'm so handsome, leave likes for me!</FontText>
      <FeedImage
        sources={[
          IMAGES.fakepostimage,
          IMAGES.fakepostimage,
          IMAGES.fakepostimage,
          IMAGES.fakepostimage,
          IMAGES.fakepostimage
        ]}
      />
      <View className="flex-row gap-5 px-3 justify-between">
        <ToggleableReactionButton
          number={5}
          canActiveSvgComponent={<HeartSVG />}
          onPress={() => {}}
        />
        <UnToggleableReactionButton
          number={999}
          svgComponent={<CommentSVG />}
          onPress={() => {
            modalizeRef.current?.open();
          }}
        />
        <UnToggleableReactionButton
          svgComponent={<ShareSVG />}
          onPress={() => {}}
        />
        <ToggleableReactionButton
          className="flex-1 flex-row justify-end"
          canActiveSvgComponent={<BookmarkSVG />}
          onPress={() => {}}
        />
      </View>
      <Modalize
        ref={modalizeRef}
        flatListProps={{
          data: [],
          renderItem: ({ item }) => (
            <View>
              <FontText>{item}</FontText>
            </View>
          ),
          keyExtractor: (item) => item,
          showsVerticalScrollIndicator: false
        }}
      />
    </View>
  );
}
