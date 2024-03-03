import FontText from "@/components/common/FontText";
import { View, Image, TouchableOpacity } from "react-native";
import AvatarImage from "./AvatarImage";
import { IMAGES } from "@/constants";
import LikeReaction from "./LikeReaction";
import CommentReaction from "./CommentReaction";
import SaveReaction from "./SaveReaction";
import ShareReaction from "./ShareReaction";

export default function Feed() {
  return (
    <View className="px-4 py-3 gap-3 border-b border-gray-200">
      <View className="flex-row items-center justify-between px-2 ">
        <AvatarImage source={IMAGES.fakeavatar} className="mr-2" />
        <FontText className="font-bold">Thanh Pham</FontText>
        <FontText className="flex-1 text-right text-gray-400">
          1 hour ago
        </FontText>
      </View>
      <FontText className="mx-2">I'm so handsome, leave likes for me!</FontText>
      <TouchableOpacity>
        <Image
          source={IMAGES.fakepostimage}
          resizeMode="cover"
          className="w-full h-72 rounded-2xl"
        />
      </TouchableOpacity>
      <View className="flex-row gap-5 px-3 justify-between">
        <LikeReaction number={99} />
        <CommentReaction number={9999} />
        <ShareReaction />
        <SaveReaction className="flex-1 flex-row justify-end" />
      </View>
    </View>
  );
}
