import FontText from "@/components/common/FontText";
import React, { ReactElement, useState } from "react";
import { TouchableOpacity } from "react-native";

export default function ToggleableReactionButton(props: {
  number?: number;
  className?: string;
  canActiveSvgComponent: ReactElement;
  onPress: () => void;
}) {
  const [isActive, setIsActive] = useState(false);

  return (
    <TouchableOpacity
      className={`flex-row gap-1 items-center ${props.className}`}
      onPress={() => {
        props.onPress();
        setIsActive((prev) => !prev);
      }}
    >
      {React.cloneElement(props.canActiveSvgComponent, { isActive })}
      <FontText className={isActive && "text-primary"}>{props.number}</FontText>
    </TouchableOpacity>
  );
}
