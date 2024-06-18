import XSVG from "@/components/svg/XSGV";
import { View, FlatList, Image, Pressable } from "react-native";

type ImagesPickedFlatListProps = {
  selectedImages: string[];
  removeImage: (any) => void;
  isInitialImage: (image: string) => boolean;
};

export default function ImagesPickedFlatList(props: ImagesPickedFlatListProps) {
  return (
    <>
      {props.selectedImages && (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ flexGrow: 0, paddingHorizontal: 8 }}
          data={props.selectedImages}
          keyExtractor={(item, index) => item + index.toString()}
          renderItem={({ item }) => (
            <View className="mx-2 shadow-lg relative">
              <Pressable
                android_ripple={{
                  borderless: false,
                  foreground: true
                }}
                onPress={() => props.removeImage(item)}
                className="rounded-full p-2 bg-lightblack/90 absolute top-2 right-2 z-50 overflow-hidden"
              >
                <XSVG
                  height={16}
                  width={16}
                  strokeColor={"white"}
                  strokeWidth={2}
                />
              </Pressable>
              <Image
                source={{
                  uri: props.isInitialImage(item)
                    ? process.env.EXPO_PUBLIC_HTTP_UPLOADS + item
                    : item
                }}
                style={{ width: 180, height: 180 }}
                className="rounded-lg"
              />
            </View>
          )}
        />
      )}
    </>
  );
}
