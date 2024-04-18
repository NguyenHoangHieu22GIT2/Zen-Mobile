import { View } from "react-native";

type RadioButtonProps = {
  isSelected: boolean;
};

export default function RadioButton(props: RadioButtonProps) {
  return (
    <View
      style={{
        height: 24,
        width: 24
      }}
      className={` border-2 rounded-full  ${
        props.isSelected ? "border-primary" : "border-gray-400"
      } items-center justify-center`}
    >
      {props.isSelected ? (
        <View
          className="rounded-full bg-primary"
          style={{
            height: 12,
            width: 12
          }}
        />
      ) : null}
    </View>
  );
}
