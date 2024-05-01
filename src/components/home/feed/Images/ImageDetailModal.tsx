import BackSvg from "@/components/svg/BackSvg";
import { useEffect, useRef } from "react";
import {
  View,
  Modal,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image,
  StatusBar
} from "react-native";

export default function ImageDetailModal(props: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  imageSourceURIs: string[];
  initialShowingImageIndex: number;
}) {
  const { isOpen, setIsOpen, imageSourceURIs, initialShowingImageIndex } =
    props;
  const flatListRef = useRef(null);
  const getItemLayout = (data, index) => {
    return {
      length: Dimensions.get("window").width,
      offset: Dimensions.get("window").width * index,
      index
    };
  };
  useEffect(() => {
    flatListRef.current?.scrollToIndex({
      animated: true,
      index: initialShowingImageIndex
    });
  }, []);
  return (
    <Modal
      animationType="slide"
      visible={isOpen}
      onRequestClose={() => {
        setIsOpen(false);
      }}
    >
      <StatusBar
        animated={true}
        backgroundColor={isOpen ? "black" : "white"}
        barStyle={"light-content"}
        // hidden={isOpen}
      />
      <View className="bg-black h-full justify-center relative">
        <TouchableOpacity
          className="absolute top-5 left-5  z-50"
          onPress={() => {
            setIsOpen(false);
          }}
        >
          <BackSvg fill="#fff" />
        </TouchableOpacity>
        <View>
          <FlatList
            ref={flatListRef}
            data={imageSourceURIs}
            initialScrollIndex={initialShowingImageIndex}
            getItemLayout={getItemLayout}
            onScrollToIndexFailed={(infor) => {
              console.log(infor);
            }}
            renderItem={({ item }) => {
              return (
                <View
                  className="justify-center"
                  style={{ width: Dimensions.get("window").width }}
                >
                  <Image
                    source={{ uri: item }}
                    resizeMode="contain"
                    style={{ width: "100%", height: "100%" }}
                  />
                </View>
              );
            }}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </Modal>
  );
}
