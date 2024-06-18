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
import { router, useLocalSearchParams } from "expo-router";
import { useEditPost } from "@/hook/feed/useEditPost";

export default function AddPostForm() {
  const { id } = useLocalSearchParams();
  const { inputs, changeInputs, submitEditPost, isInitialImage } = useEditPost(
    id as string
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [postPrivacy, setPostPrivacy] = useState("");
  function removeImage(removeItem: string) {
    changeInputs(
      "images",
      inputs.images.filter((item) => item != removeItem)
    );
  }
  function addImages(images: string[]) {
    changeInputs("images", inputs.images.concat(images));
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
          Edit a Post
        </FontText>
        <PostButton
          onPress={() => {
            submitEditPost();
          }}
        />
      </View>
      <View className="flex-row gap-3 px-4 my-2 items-end">
        <MyAddPostAvatar source={IMAGES.fakeavatar} />
        <PrivacyPickerSelect onValueChange={(value) => setPostPrivacy(value)} />
      </View>
      <TextInput
        autoFocus
        multiline={true}
        numberOfLines={2}
        style={{ textAlignVertical: "top" }}
        className="px-6 text-xl mt-4 font-bold"
        placeholder="Post's title.."
        onChangeText={(text) => changeInputs("title", text)}
        value={inputs.title}
      />

      <TextInput
        autoFocus
        multiline={true}
        numberOfLines={4}
        style={{ textAlignVertical: "top" }}
        className="px-6 text-xl mt-1"
        placeholder="What's on your head?"
        onChangeText={(text) => changeInputs("body", text)}
        value={inputs.body}
      />
      <ImagesPickedFlatList
        isInitialImage={isInitialImage}
        selectedImages={inputs.images}
        removeImage={removeImage}
      />
      <MultipleImagePicker
        onAddImages={(images) => {
          addImages(images);
        }}
      />
    </SafeAreaView>
  );
}
