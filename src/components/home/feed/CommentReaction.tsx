import FontText from "@/components/common/FontText";
import CommentSVG from "@/components/svg/CommentSVG";
import { TouchableOpacity, View } from "react-native";

export default function CommentReaction(props: { number: number }) {
  return (
    <View className="flex-row gap-1">
      <TouchableOpacity onPress={() => {}}>
        <CommentSVG />
      </TouchableOpacity>
      <FontText>{props.number}</FontText>
    </View>
  );
}
