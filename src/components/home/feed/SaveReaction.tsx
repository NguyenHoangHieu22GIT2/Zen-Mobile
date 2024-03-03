import BookmarkSVG from "@/components/svg/BookmarkSVG";
import { useState } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

export default function SaveReaction(props: TouchableOpacityProps) {
  const [isActive, setIsActive] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => {
        setIsActive((prev) => !prev);
      }}
      className={props.className}
    >
      <BookmarkSVG active={isActive} />
    </TouchableOpacity>
  );
}
