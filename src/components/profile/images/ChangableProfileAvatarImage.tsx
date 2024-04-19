import { View, TouchableOpacity, ImageSourcePropType } from "react-native";
import ProfileAvatarImage from "./ProfileAvatarImage";
import * as ImagePicker from "expo-image-picker";
import EditSVG from "@/components/svg/EditSVG";

type ChangableProfileAvatarImageProps = {
  setSelectedImage: React.Dispatch<React.SetStateAction<string>>;
  source: ImageSourcePropType;
};

export default function ChangableProfileAvatarImage({
  setSelectedImage,
  source
}: ChangableProfileAvatarImageProps) {
  async function pickImage() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      allowsEditing: true,
      aspect: [1, 1]
    });

    if (!result.canceled) {
      const selectedImageUri = result.assets.map((asset) => asset.uri)[0];
      setSelectedImage(selectedImageUri);
    }
  }

  return (
    <TouchableOpacity
      style={{ width: 86, height: 86 }}
      onPress={pickImage}
      className="relative rounded-full border-2 border-gray-300"
    >
      <ProfileAvatarImage source={source} />
      <View className="rounded-full p-2 self-start items-center justify-center bg-darkblack/30 absosute bottom-8 left-full -translate-x-full">
        <EditSVG width={15} height={15} strokeColor="white" />
      </View>
    </TouchableOpacity>
  );
}
