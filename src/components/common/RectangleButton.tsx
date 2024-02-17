import { ReactNode } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import FontText from "./FontText";

export default function RectangleButton(
  props: {
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
    text: string;
    secondary?: boolean;
    textColor?: string;
    textStyle?: string;
  } & TouchableOpacityProps
) {
  const {
    secondary,
    text,
    iconLeft,
    iconRight,
    textColor,
    textStyle,
    className,
    ...otherProps
  } = props;
  const finalTextColor = textColor ?? (secondary ? "black" : "white");

  return (
    <TouchableOpacity
      className={`py-5 px-3 mx-8 relative ${
        secondary ? "bg-white" : "bg-primary"
      } rounded-2xl shadow-xl flex-row justify-center items-center ${className}`}
      {...otherProps}
    >
      {iconLeft && iconLeft}
      <FontText
        style={{ color: finalTextColor }}
        className={`text-center ${textStyle}`}
      >
        {text}
      </FontText>
      {iconRight && iconRight}
    </TouchableOpacity>
  );
}
