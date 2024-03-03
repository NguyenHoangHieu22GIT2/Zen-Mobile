import { ReactNode } from "react";
import { ScrollView } from "react-native";
import {
  SafeAreaView,
  SafeAreaViewProps
} from "react-native-safe-area-context";
export default function TopWrapperView(
  props: { children: ReactNode } & SafeAreaViewProps
) {
  return (
    <SafeAreaView
      style={{ backgroundColor: "white", height: "100%" }}
      {...props}
    >
      <ScrollView>{props.children}</ScrollView>
    </SafeAreaView>
  );
}
