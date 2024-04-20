import { FontText, PressableText } from "@/components";
import PostButton from "@/components/home/add-feed/Buttons/PostButton";
import PrivacyPickerSelect from "@/components/home/add-feed/Buttons/PrivacyPickerSelect";
import MultipleImagePicker from "@/components/home/add-feed/Images/MultipleImagePicker";
import MyAddPostAvatar from "@/components/home/add-feed/Images/MyAddPostAvatar";
import XSVG from "@/components/svg/XSGV";
import { COLORS, IMAGES } from "@/constants";
import { useState } from "react";
import { TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ImagesPickedFlatList from "@/components/home/add-feed/Images/ImagesPickedFlatList";
import { router } from "expo-router";

export default function AddPostForm() {
  const [postPrivacy, setPostPrivacy] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);
  function removeImage(removeItem) {
    setSelectedImages((prev) => prev.filter((item) => item != removeItem));
  }
  return (
    <SafeAreaView className="h-full bg-white">
      <View className="flex-row items-center justify-between px-4 my-2">
        <PressableText onPress={() => router.back()}>
          <XSVG
            width={25}
            height={25}
            strokeColor={COLORS.gray}
            strokeWidth={1.5}
          />
        </PressableText>

        <FontText className="text-xl font-bold text-gray-600">
          Create a Post
        </FontText>
        <PostButton onPress={() => { }} />
      </View>
      <View className="flex-row gap-3 px-4 my-2 items-end">
        <MyAddPostAvatar source={IMAGES.fakeavatar} />
        <PrivacyPickerSelect onValueChange={(value) => setPostPrivacy(value)} />
      </View>

      <TextInput
        autoFocus
        multiline={true}
        numberOfLines={4}
        style={{ textAlignVertical: "top" }}
        className="px-6 text-xl mt-3"
        placeholder="What's on your head?"
      />
      <ImagesPickedFlatList
        selectedImages={selectedImages}
        removeImage={removeImage}
      />
      <MultipleImagePicker setSelectedImages={setSelectedImages} />
    </SafeAreaView>
  );
}
