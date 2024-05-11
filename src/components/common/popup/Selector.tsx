import { ReactElement, useState } from "react";
import { View, Pressable } from "react-native";
import FontText from "../FontText";
import RadioButton from "../RadioButton";
import { COLORS } from "@/constants";

type SelectorProps = {
  children: ReactElement<SelectItemProps>[];
  defaultValue?: string;
  onValueChange: (string) => void;
};

type SelectItemProps = {
  name: string;
  value: string;
  description?: string;
  onPress?: () => void;
  isSelected?: boolean;
};

export default function Selector(props: SelectorProps) {
  const [selectedValue, setSelectedValue] = useState(props.defaultValue ?? "");

  const handleSelectChange = (value) => {
    setSelectedValue(value);
    props.onValueChange(value);
  };

  return (
    <View>
      {props.children.map((child) => (
        <SelectItem
          key={child.props.value}
          onPress={() => handleSelectChange(child.props.value)}
          isSelected={selectedValue === child.props.value}
          {...child.props}
        />
      ))}
    </View>
  );
}

export const SelectItem = ({
  onPress,
  name,
  isSelected,
  description
}: SelectItemProps) => {
  return (
    <Pressable
      android_ripple={{
        color: COLORS.lightgray,
        borderless: false,
        foreground: true
      }}
      onPress={onPress}
      className="flex-row gap-2 px-5 py-3 overflow-hidden"
    >
      <RadioButton isSelected={isSelected} />
      <View className="">
        <FontText className=" text-lg">{name}</FontText>
        {description && (
          <FontText className=" text-gray-400">{description}</FontText>
        )}
      </View>
    </Pressable>
  );
};
