import { FontText, PressableText, RectangleButton } from "@/components";
import Selector, { SelectItem } from "@/components/common/popup/Selector";
import SingleImagePicker from "@/components/group/inputs/SingleImagePicker";
import XSVG from "@/components/svg/XSGV";
import { COLORS } from "@/constants";
import useAddGroup from "@/hook/group/useAddGroup";
import { router } from "expo-router";
import { ScrollView, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AddGroupForm() {
  const { changeInputs, submitAddGroup, inputs } = useAddGroup();
  function removeImage() {
    changeInputs("avatar", "");
  }
  function addImage(image: string) {
    changeInputs("avatar", image);
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

        <FontText className="text-xl flex-1 text-center font-bold text-gray-600">
          Create a Group
        </FontText>
      </View>
      <ScrollView contentContainerClassName="gap-3 px-4 my-2 ">
        <FontText className="font-bold text-lg">Name</FontText>
        <TextInput
          style={{ textAlignVertical: "top" }}
          className=" text-xl font-bold border border-gray-300 rounded-xl px-4 py-2 w-full"
          placeholder="Name of the group.."
          cursorColor={COLORS.primary}
          onChangeText={(text) => changeInputs("name", text)}
        />
        <FontText className="font-bold text-lg">Description</FontText>
        <TextInput
          style={{ textAlignVertical: "top" }}
          className=" text-xl font-bold border border-gray-300 rounded-xl px-4 py-2 w-full"
          placeholder="Tell us about your group.."
          cursorColor={COLORS.primary}
          multiline
          onChangeText={(text) => changeInputs("description", text)}
        />
        <FontText className="font-bold text-lg">Visibility</FontText>
        <Selector
          onValueChange={(value) => {
            changeInputs("isVisible", value == "visible");
          }}
        >
          <SelectItem
            name="Visible"
            value="visible"
            description="Anyone can find this group"
          />
          <SelectItem
            name="Hidden"
            value="hidden"
            description="Only members can find this group"
          />
        </Selector>
        <FontText className="font-bold text-lg">Your group image</FontText>
        <SingleImagePicker
          onAddImage={(image) => {
            addImage(image);
          }}
          onRemoveImage={removeImage}
          selectedImage={inputs.avatar}
        />
      </ScrollView>
      <View className="">
        <RectangleButton
          text="Create Group"
          textStyle="font-bold"
          onPress={() => {
            submitAddGroup();
            console.log(inputs);
          }}
        />
      </View>
    </SafeAreaView>
  );
}
