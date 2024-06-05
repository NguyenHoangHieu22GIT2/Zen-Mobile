import OptionMenu, { Option } from "@/components/common/popup/OptionMenu";
import BackSvg from "@/components/svg/BackSvg";
import EditSVG from "@/components/svg/EditSVG";
import { COLORS } from "@/constants";
import { useAuthStore } from "@/libs/zustand/auth.zustand";
import { EndUser } from "@/types/enduser.type";
import { router } from "expo-router";
import { View, Pressable } from "react-native";

type props = {
  endUser: EndUser;
};

export default function ProfileHeader({ endUser }: props) {
  const myUserId = useAuthStore((state) => state.endUser._id);
  return (
    <View className="flex-row justify-between items-center">
      <Pressable
        android_ripple={{
          color: COLORS.lightgray,
          borderless: false,
          foreground: true
        }}
        className="px-4 py-4 mx-2  rounded-full overflow-hidden justify-start"
        style={{ width: 50 }}
        onPress={router.back}
      >
        <BackSvg />
      </Pressable>
      {endUser?._id === myUserId && (
        <OptionMenu snapPoint={[125]}>
          <Option
            onPress={() => {
              router.push("profile/edit");
            }}
            label="Edit Profile"
            icon={
              <EditSVG width={25} height={25} strokeColor={COLORS.lightblack} />
            }
          />
        </OptionMenu>
      )}
    </View>
  );
}
