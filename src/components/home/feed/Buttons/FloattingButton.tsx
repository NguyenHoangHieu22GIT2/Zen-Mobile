import { ReactNode } from "react";
import { Pressable, PressableProps } from "react-native";

type FloattingButtonProps = {
  icon: ReactNode;
};

export default function FloattingButton({
  icon,
  onPress
}: FloattingButtonProps & PressableProps) {
  return (
    <Pressable
      android_ripple={{
        color: "#7b99fd",
        borderless: false,
        foreground: true
      }}
      onPress={onPress}
      className="rounded-full p-5 bg-primary overflow-hidden absolute bottom-5 right-5 z-50 shadow-lg"
    >
      {icon}
    </Pressable>
  );
}
