import { View, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontText, PressableText } from "@/components";
import { router, useLocalSearchParams } from "expo-router";
import XSVG from "@/components/svg/XSGV";
import { COLORS } from "@/constants";
import PostButton from "@/components/home/add-feed/Buttons/PostButton";
import ImagesPickedFlatList from "@/components/home/add-feed/Images/ImagesPickedFlatList";
import MultipleImagePicker from "@/components/home/add-feed/Images/MultipleImagePicker";
import useAddGroupPost from "@/hook/group/useAddGroupPost";

export default function CreateGroupPost() {
  const { id } = useLocalSearchParams();
  console.log("id", id);
  const { inputs, changeInputs, submitAddGroupPost } = useAddGroupPost(
    id as string
  );
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
          Create a Post
        </FontText>
        <PostButton
          onPress={() => {
            submitAddGroupPost();
          }}
        />
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
