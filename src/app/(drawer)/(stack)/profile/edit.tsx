import {
  AuthTextInput,
  FontText,
  RectangleButton,
  TopWrapperView
} from "@/components";
import ChangableProfileAvatarImage from "@/components/profile/images/ChangableProfileAvatarImage";
import { COLORS, IMAGES } from "@/constants";
import { useState } from "react";

export default function edit() {
  const [selectedImage, setSelectedImage] = useState(IMAGES.fakeavatar);

  return (
    <TopWrapperView style={{ height: "100%" }} className="items-center px-4">
      <ChangableProfileAvatarImage
        setSelectedImage={setSelectedImage}
        source={
          selectedImage == IMAGES.fakeavatar
            ? IMAGES.fakeavatar
            : { uri: selectedImage }
        }
      />
      <FontText className="font-bold text-xl text-center my-2">
        John Doe
      </FontText>
      <AuthTextInput
        SVGIconElement={<></>}
        label="Username"
        selectionColor={COLORS.primary}
        className="mb-3"
      />
      <AuthTextInput
        SVGIconElement={<></>}
        label="Email"
        selectionColor={COLORS.primary}
        className="mb-3"
      />
      <AuthTextInput
        SVGIconElement={<></>}
        label="About me..."
        selectionColor={COLORS.primary}
        multiline
        className="mb-3"
      />
      <RectangleButton
        style={{ width: "100%" }}
        textStyle="font-bold text-lg"
        text="Save"
        onPress={() => {}}
      />
    </TopWrapperView>
  );
}
