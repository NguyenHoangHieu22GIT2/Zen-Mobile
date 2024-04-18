import FontText from "@/components/common/FontText";
import { ScrollView, View } from "react-native";

export default function ProfileAboutTab({ headerHeight }) {
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
        <FontText className="text-base">
          Enjoy your favorite dishe and a lovely your friends and family and
          have a great time. Food from local food trucks will be available for
          purchase.
        </FontText>
      </ScrollView>
    </View>
  );
}
