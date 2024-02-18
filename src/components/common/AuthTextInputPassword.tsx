import { ReactNode, useState } from "react";
import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View
} from "react-native";
import EyeSVG from "../svg/EyeSVG";
import EyeSlashSVG from "../svg/EyeSlashSVG";

type props = {
  SVGIconElement: ReactNode;
  label: string;
} & TextInputProps;

export default function AuthTextInputPassword(props: props) {
  const { SVGIconElement, label, ...otherProps } = props;
  const [visible, setVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setVisible((prev) => !prev);
  };
  const inputSecured = !visible;
  return (
    <View className="flex-row gap-3 items-center border border-gray-300 rounded-xl px-4 py-3">
      {SVGIconElement}
      <TextInput
        className="flex-1"
        placeholder={label}
        placeholderTextColor={"gray"}
        secureTextEntry={inputSecured}
        {...otherProps}
      />
      <TouchableOpacity onPress={togglePasswordVisibility}>
        {visible ? <EyeSVG /> : <EyeSlashSVG />}
      </TouchableOpacity>
    </View>
  );
}
