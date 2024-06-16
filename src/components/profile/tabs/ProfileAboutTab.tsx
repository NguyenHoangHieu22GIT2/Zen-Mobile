import FontText from "@/components/common/FontText";
import { EndUser } from "@/types/enduser.type";
import { ScrollView, View } from "react-native";
import { SharedValue } from "react-native-reanimated";

type props = {
  headerHeight: SharedValue<number>;
  endUser: EndUser;
};

export default function ProfileAboutTab({ headerHeight, endUser }: props) {
  if (!endUser) return <></>;
  return (
    <View className="flex-1 bg-white">
      <ScrollView
        className="p-4 pt-5"
        onScroll={({ nativeEvent }) => {
          const visibleContentY = nativeEvent.contentOffset.y;
          const HEADER_HEIGHT = 330;
          if (visibleContentY >= 200) {
            headerHeight.value = 0;
          } else if (visibleContentY == 0) {
            headerHeight.value = HEADER_HEIGHT / 2;
          }
        }}
      >
        <FontText className="text-base">{endUser?.description}</FontText>
      </ScrollView>
    </View>
  );
}
