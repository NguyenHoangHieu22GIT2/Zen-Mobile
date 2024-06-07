import { FontText, RectangleButton } from "@/components";
import useUpgradePlan from "@/hook/upgrade-plan/useUpgradePlan";
import { View } from "react-native";

export default function upgradePlan() {
  const { upgradePlan } = useUpgradePlan();
  return (
    <View className="bg-[#271453] h-full py-3">
      <FontText className="text-white">PREMIUM PLAN</FontText>
      <FontText className="text-white">10 Days Left</FontText>
      <FontText className="text-white">
        Come on and exploxe the full potential of the app
      </FontText>
      <View className="flex-row items-center justify-center">
        <View className="h-3 bg-gray-50/35 w-full flex-1" />
        <FontText className="p-3 rounded-full bg-gray-50/35 text-white">
          PLANS
        </FontText>
        <View className="h-3 bg-gray-50/35 w-full flex-1" />
      </View>
      <View className="border-2 border-white p-3 rounded-xl text-white">
        <FontText>$8 Premium plan</FontText>
      </View>
      <RectangleButton text="Upgrade" onPress={upgradePlan} />
    </View>
  );
}
