import {
  AuthTextInput,
  FontText,
  RectangleButton,
  TopWrapperView
} from "@/components";
import ChangableProfileAvatarImage from "@/components/profile/images/ChangableProfileAvatarImage";
import { COLORS, IMAGES } from "@/constants";
import { useEditProfile } from "@/hook/profile/useEditProfile";
import { useAuthStore } from "@/libs/zustand/auth.zustand";
import { useState } from "react";

export default function edit() {
  const endUser = useAuthStore((state) => state.endUser);
  const [selectedImage, setSelectedImage] = useState(IMAGES.fakeavatar);
  const { inputs, changeInputs, submitEditProfile, setImage, image } =
    useEditProfile();
  return (
    <TopWrapperView style={{ height: "100%" }} className="items-center px-4">
      <ChangableProfileAvatarImage
        setSelectedImage={setImage}
        source={
          !image
            ? IMAGES.fakeavatar
            : image === endUser.avatar
            ? { uri: process.env.EXPO_PUBLIC_HTTP_UPLOADS + image }
            : { uri: image }
        }
      />
      <AuthTextInput
        SVGIconElement={<></>}
        label="Username"
        selectionColor={COLORS.primary}
        className="mb-3 mt-10"
        value={inputs.username}
        onChangeText={(text) => {
          changeInputs("username", text);
        }}
      />
      <AuthTextInput
        SVGIconElement={<></>}
        label="About me..."
        selectionColor={COLORS.primary}
        multiline
        className="mb-3"
        value={inputs.description}
        onChangeText={(text) => {
          changeInputs("description", text);
        }}
      />
      <RectangleButton
        style={{ width: "100%" }}
        textStyle="font-bold text-lg"
        text="Save"
        onPress={() => {
          submitEditProfile();
        }}
      />
    </TopWrapperView>
  );
}
