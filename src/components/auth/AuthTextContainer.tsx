import { ReactNode } from "react";
import { View } from "react-native";

type props = {
  children: ReactNode;
};

const AuthTextContainer = (props: props) => {
  return (
    <View className="border border-gray-300 rounded-xl px-4 py-3">
      {props.children}
    </View>
  );
};

export default AuthTextContainer;
