import FontText from "@/components/common/FontText";
import { ReactElement } from "react";
import { TouchableOpacity } from "react-native";

export default function ToggleCommentsButton(props: {
  number?: number;
  className?: string;
  svgComponent: ReactElement;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      className={`flex-row gap-1 items-center ${props.className}`}
      onPress={props.onPress}
    >
      {props.svgComponent}
      <FontText>{props.number}</FontText>
    </TouchableOpacity>
  );
}
