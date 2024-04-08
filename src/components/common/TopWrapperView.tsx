import { ReactNode } from "react";
import { View, ViewProps } from "react-native";
export default function TopWrapperView(
  props: { children: ReactNode } & ViewProps
) {
  const { className, ...otherProps } = props;
  return (
    <View className={`bg-white ${className}`} {...otherProps}>
      {/* <ScrollView>{props.children}</ScrollView> */}
      {props.children}
    </View>
  );
}
