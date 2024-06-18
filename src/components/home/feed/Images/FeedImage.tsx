import { useState, useEffect } from "react";
import { TouchableOpacity, Image, View } from "react-native";
import PlaceholderSmallImage from "./PlaceholderSmallImage";
import useFeedImageWidthandHeightCalculator from "@/hook/feed/useFeedImageWidthandHeightCalculator";
import ImageDetailModal from "./ImageDetailModal";

const MAX_IMAGE_NUMBER_TO_RENDER = 4;
const CONTAINER_HEIGHT = 250;

export default function FeedImage({ sourceURIs }: { sourceURIs: string[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialShowingImageIndex, setInitialShowingImageIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState<number | null>(null);

  const {
    widthOfImage,
    heightOfImage,
    isLoading,
    findImageWidthAndHeightusingContainerWidth
  } = useFeedImageWidthandHeightCalculator(sourceURIs.length, CONTAINER_HEIGHT);

  useEffect(() => {
    if (containerWidth !== null) {
      findImageWidthAndHeightusingContainerWidth({
        nativeEvent: { layout: { width: containerWidth } }
      });
    }
  }, [sourceURIs.length, containerWidth]);

  const smallImagesTobeRender = sourceURIs.map((source, index) => {
    if (index + 1 > MAX_IMAGE_NUMBER_TO_RENDER) return;
    return (
      <TouchableOpacity
        key={index}
        className="relative"
        onPress={() => {
          setInitialShowingImageIndex(index);
          setIsOpen(true);
        }}
      >
        <Image
          key={index}
          source={{ uri: source }}
          resizeMode="cover"
          style={{
            width: widthOfImage,
            height: heightOfImage
          }}
        />
        {index + 1 == MAX_IMAGE_NUMBER_TO_RENDER &&
          sourceURIs.length > MAX_IMAGE_NUMBER_TO_RENDER && (
            <PlaceholderSmallImage
              width={widthOfImage}
              height={heightOfImage}
              numberOfImageLeft={sourceURIs.length - 3}
            />
          )}
      </TouchableOpacity>
    );
  });

  return (
    <View>
      <View
        onLayout={(event) => {
          setContainerWidth(event.nativeEvent.layout.width);
          findImageWidthAndHeightusingContainerWidth(event);
        }}
        style={sourceURIs.length != 0 && { height: CONTAINER_HEIGHT }}
        className="w-full bg-gray-100 rounded-2xl gap-1 flex-row flex-wrap overflow-hidden relative"
      >
        {!isLoading && smallImagesTobeRender}
      </View>

      <ImageDetailModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        imageSourceURIs={sourceURIs}
        initialShowingImageIndex={initialShowingImageIndex}
      />
    </View>
  );
}
