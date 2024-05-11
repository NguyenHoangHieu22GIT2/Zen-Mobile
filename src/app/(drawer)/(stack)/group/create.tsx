import { FontText, PressableText, RectangleButton } from "@/components";
import Selector, { SelectItem } from "@/components/common/popup/Selector";
import XSVG from "@/components/svg/XSGV";
import { COLORS } from "@/constants";
import { router } from "expo-router";
import { TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AddGroupForm() {
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
      <View className="gap-3 px-4 my-2 ">
        <FontText className="font-bold text-lg">Name</FontText>
        <TextInput
          style={{ textAlignVertical: "top" }}
          className=" text-xl font-bold border border-gray-300 rounded-xl px-4 py-2 w-full"
          placeholder="Name of the group.."
          cursorColor={COLORS.primary}
          // onChangeText={(text) => changeInputs("title", text)}
        />
        <FontText className="font-bold text-lg">Privacy</FontText>
        <Selector onValueChange={(value) => {}}>
          <SelectItem
            name="Public"
            value="public"
            description="Anyone can see who's in the group and what they post"
          />
          <SelectItem
            name="Private"
            value="private"
            description="Only group members can see who's in the group and what they post"
          />
        </Selector>
        <FontText className="font-bold text-lg">Visibility</FontText>
        <Selector onValueChange={(value) => {}}>
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
      </View>
      <View className="">
        <RectangleButton text="Create Group" textStyle="font-bold" />
      </View>
    </SafeAreaView>
  );
}
