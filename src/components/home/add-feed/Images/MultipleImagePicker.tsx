import CameraSVG from "@/components/svg/CameraSVG";
import { COLORS } from "@/constants";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";

type MultipleImagePickerProps = {
  onAddImages: (images: string[]) => void;
};

export default function MultipleImagePicker(props: MultipleImagePickerProps) {
  async function pickImage() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 1
    });

    if (!result.canceled) {
      const selectedImageUris = result.assets.map((asset) => asset.uri);
      props.onAddImages(selectedImageUris);
    }
  }
  return (
    <KeyboardAvoidingView
      className="flex-1 my-4 mx-4"
      {...(Platform.OS === "ios" ? { behavior: "padding" } : {})}
    >
      <TouchableOpacity
        onPress={pickImage}
        className="rounded-lg p-6 border border-gray-300 self-start"
      >
        <CameraSVG width={25} height={25} fill={COLORS.primary} />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
