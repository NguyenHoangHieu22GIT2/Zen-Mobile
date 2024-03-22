import { useState } from "react";
import {
  TouchableOpacity,
  Image,
  ImageSourcePropType,
  View
} from "react-native";
import PlaceholderSmallImage from "./PlaceholderSmallImage";
import useFeedImageWidthandHeightCalculator from "@/hook/feed/useFeedImageWidthandHeightCalculator";
import ImageDetailModal from "../ImageDetailModal";

const MAX_IMAGE_NUMBER_TO_RENDER = 4;
const CONTAINER_HEIGHT = 250;

export default function FeedImage(props: { sources: ImageSourcePropType[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialShowingImageIndex, setInitialShowingImageIndex] = useState(0);
  const {
    widthOfImage,
    heightOfImage,
    isLoading,
    findImageWidthAndHeightusingContainerWidth
  } = useFeedImageWidthandHeightCalculator(
    props.sources.length,
    CONTAINER_HEIGHT
  );

  const smallImagesTobeRender = props.sources.map((source, index) => {
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
          source={source}
          resizeMode="cover"
          style={{
            width: widthOfImage,
            height: heightOfImage
          }}
        />
        {index + 1 == MAX_IMAGE_NUMBER_TO_RENDER &&
          props.sources.length > MAX_IMAGE_NUMBER_TO_RENDER && (
            <PlaceholderSmallImage
              width={widthOfImage}
              height={heightOfImage}
              numberOfImageLeft={props.sources.length - 3}
            />
          )}
      </TouchableOpacity>
    );
  });

  return (
    <View>
      <View
        onLayout={(event) => findImageWidthAndHeightusingContainerWidth(event)}
        style={props.sources.length != 0 && { height: CONTAINER_HEIGHT }}
        className="w-full bg-gray-100 rounded-2xl gap-1 flex-row flex-wrap overflow-hidden relative"
      >
        {!isLoading && smallImagesTobeRender}
      </View>

      <ImageDetailModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        imageSources={props.sources}
        initialShowingImageIndex={initialShowingImageIndex}
      />
    </View>
  );
}
