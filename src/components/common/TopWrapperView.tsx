import { ReactNode } from "react";
import {
  SafeAreaView,
  SafeAreaViewProps
} from "react-native-safe-area-context";
export default function TopWrapperView(
  props: { children: ReactNode } & SafeAreaViewProps
) {
  return (
    <SafeAreaView style={{ backgroundColor: "white" }} {...props}>
      {props.children}
    </SafeAreaView>
  );
}
