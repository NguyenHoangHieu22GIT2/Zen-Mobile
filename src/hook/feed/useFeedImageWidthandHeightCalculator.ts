import { useState } from "react";

export default function useFeedImageWidthandHeightCalculator(
  lengthOfImageArray: number,
  containerHeight: number
) {
  const [widthOfImage, setWidthOfImage] = useState(30);
  const [heightOfImage, setHeightOfImage] = useState(30);
  const [isLoading, setIsLoading] = useState(true);
  const findImageWidthAndHeightusingContainerWidth = (event) => {
    const { width } = event.nativeEvent.layout;
    const MAX_COLUMN_NUMBER = 2;
    const GAP_LENGTH = 2.2;
    const numberOfImageToDisplay =
      lengthOfImageArray > 4 ? 4 : lengthOfImageArray;
    const numberOfColforImagecontainer =
      numberOfImageToDisplay > MAX_COLUMN_NUMBER
        ? MAX_COLUMN_NUMBER
        : numberOfImageToDisplay;
    setWidthOfImage(
      width / numberOfColforImagecontainer -
      (numberOfImageToDisplay != 1 && GAP_LENGTH)
    );

    const MAX_ROW_NUMBER = 2;
    const numberOfRowforImagecontainer =
      Math.ceil(numberOfImageToDisplay / MAX_ROW_NUMBER) == 0
        ? 1
        : Math.ceil(numberOfImageToDisplay / MAX_ROW_NUMBER);
    setHeightOfImage(containerHeight / numberOfRowforImagecontainer);
    setIsLoading(false);
  };
  return {
    widthOfImage,
    heightOfImage,
    findImageWidthAndHeightusingContainerWidth,
    isLoading,
  };
}
