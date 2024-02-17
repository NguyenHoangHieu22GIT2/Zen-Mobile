import { FONT } from "@/constants";
import { Text, TextProps } from "react-native";

export default function FontText(props: TextProps) {
  const { style, ...otherProps } = props;
  return <Text style={[{ fontFamily: FONT.book }, style]} {...otherProps} />;
}
