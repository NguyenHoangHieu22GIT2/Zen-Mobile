import FontText from "@/components/common/FontText";
import HeartSVG from "@/components/svg/HeartSVG";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";

export default function LikeReaction(props: { number: number }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <View className="flex-row gap-1">
      <TouchableOpacity onPress={() => setIsActive((prev) => !prev)}>
        <HeartSVG active={isActive} />
      </TouchableOpacity>
      <FontText>{props.number}</FontText>
    </View>
  );
}
