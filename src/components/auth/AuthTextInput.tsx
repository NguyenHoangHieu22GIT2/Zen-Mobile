import { ReactNode } from "react";
import { TextInput, TextInputProps, View } from "react-native";

type props = {
  SVGIconElement: ReactNode;
  label: string;
} & TextInputProps;

export default function AuthTextInput(props: props) {
  const { SVGIconElement, label, className, ...otherProps } = props;

  return (
    <View
      className={`flex-row gap-3 items-center border border-gray-300 rounded-xl px-4 py-3 ${className}`}
    >
      {SVGIconElement}
      <TextInput
        className="flex-1"
        placeholder={label}
        placeholderTextColor={"gray"}
        secureTextEntry={false}
        {...otherProps}
      />
    </View>
  );
}
