import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import FontText from "./FontText";

export default function PressableText(
  props: { text: string } & TouchableOpacityProps
) {
  const { text, className, ...otherProps } = props;
  return (
    <TouchableOpacity {...otherProps}>
      <FontText className={className}>{text}</FontText>
    </TouchableOpacity>
  );
}
