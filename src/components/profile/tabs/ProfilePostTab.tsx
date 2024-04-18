import Feed from "@/components/home/feed/Feed";
import { View, FlatList } from "react-native";

export default function ProfilePostTab({ headerHeight }) {
  return (
    <View className="flex-1 bg-white">
      <FlatList
        onScroll={({ nativeEvent }) => {
          const visibleContentY = nativeEvent.contentOffset.y;
          const HEADER_HEIGHT = 330;
          if (visibleContentY >= 200) {
            headerHeight.value = 0;
          } else if (visibleContentY == 0) {
            headerHeight.value = HEADER_HEIGHT / 2;
          }
        }}
        data={[1, 2, 4, 5]}
        renderItem={() => <Feed />}
        keyExtractor={(item, index) => index.toString()}
        removeClippedSubviews={true}
        maxToRenderPerBatch={1}
        updateCellsBatchingPeriod={1}
        initialNumToRender={1}
      />
    </View>
  );
}
