import FontText from "@/components/common/FontText";
import { View } from "react-native";

export default function PlaceholderSmallImage(props: {
  width: number;
  height: number;
  numberOfImageLeft: number;
}) {
  const { width, height, numberOfImageLeft } = props;
  return (
    <View
      style={{
        width,
        height
      }}
      className="bg-gray-900/70 items-center justify-center absolute"
    >
      <FontText className=" font-bold text-xl text-white">
        +{numberOfImageLeft}
      </FontText>
    </View>
  );
}
