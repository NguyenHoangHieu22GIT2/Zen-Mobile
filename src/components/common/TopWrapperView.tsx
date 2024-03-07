import { ReactNode } from "react";
import { View, ViewProps } from "react-native";
export default function TopWrapperView(
  props: { children: ReactNode } & ViewProps
) {
  return (
    <View className={`bg-white ${props.className}`} {...props}>
      {/* <ScrollView>{props.children}</ScrollView> */}
      {props.children}
    </View>
  );
}
