import { FontText, RectangleButton } from "@/components";
import useUpgradePlan from "@/hook/upgrade-plan/useUpgradePlan";
import { View } from "react-native";

export default function upgradePlan() {
  const { upgradePlan } = useUpgradePlan();
  return (
    <View className="bg-white h-full py-3 px-2">
      <FontText className="text-[#271453] text-xl font-bold mx-auto">
        PREMIUM PLAN
      </FontText>
      <FontText className="text-[#271453] my-2 mx-auto">
        (10 Days Left)
      </FontText>
      <FontText className="text-[#271453] mx-auto">
        Come on and exploxe the full potential of the app
      </FontText>
      <View className="flex-row items-center justify-center my-3">
        <View className="h-2 bg-gray-300 w-full flex-1 rounded-l-xl" />
        <FontText className="p-3 px-4 rounded-full text-[#271453]  text-lg font-bold">
          PLANS
        </FontText>
        <View className="h-2 bg-gray-300 w-full flex-1 rounded-r-xl" />
      </View>
      <View className="border-2 border-[#271453] p-3 px-4 mb-3 rounded-xl text-[#271453]">
        <FontText className="text-xl font-bold">$8 Premium plan</FontText>
      </View>
      <RectangleButton
        text="Upgrade"
        textStyle="font-bold"
        onPress={upgradePlan}
      />
    </View>
  );
}
