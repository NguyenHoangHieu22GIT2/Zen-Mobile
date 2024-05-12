import CameraSVG from "@/components/svg/CameraSVG";
import XSVG from "@/components/svg/XSGV";
import { COLORS } from "@/constants";
import * as ImagePicker from "expo-image-picker";
import { Pressable, View } from "react-native";
import { TouchableOpacity, Image } from "react-native";

type SingleImagePickerProps = {
  onAddImage: (image: string) => void;
  selectedImage: string;
  onRemoveImage: () => void;
};

export default function SingleImagePicker(props: SingleImagePickerProps) {
  async function pickImage() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: false,
      quality: 1
    });

    if (!result.canceled) {
      const selectedImageUri = result.assets[0].uri;
      props.onAddImage(selectedImageUri);
    }
  }
  return (
    <TouchableOpacity
      onPress={pickImage}
      className="rounded-xl my-3 border justify-center border-gray-300 self-start w-full"
    >
      {!props.selectedImage ? (
        <View className="text-center self-start my-24 mx-auto">
          <CameraSVG width={25} height={25} fill={COLORS.primary} />
        </View>
      ) : (
        <View className="relative">
          <Pressable
            android_ripple={{
              borderless: false,
              foreground: true
            }}
            onPress={() => props.onRemoveImage()}
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
            source={{ uri: props.selectedImage }}
            style={{ width: "100%", height: 200 }}
            className="rounded-lg"
          />
        </View>
      )}
    </TouchableOpacity>
  );
}
