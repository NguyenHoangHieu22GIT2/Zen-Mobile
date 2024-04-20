import BigZenLogo from "@/components/common/BigZenLogo";
import { IMAGES } from "@/constants";
import { router } from "expo-router";
import { useEffect } from "react";
import { Image, View } from "react-native";
export default function Page() {
  // const { top } = useSafeAreaInsets();
  useEffect(() => {
    setTimeout(() => {
      router.push("/login/");
    }, 3000);
  }, []);
  return (
    <View className="flex-1  justify-center items-center ">
      <Image source={IMAGES.appbackground} className="w-full h-full absolute" />
      <BigZenLogo />
      {/* <Link
        href={{
          pathname: "/login/"
        }}
      >
        Go to sign in page
      </Link> */}
    </View>
  );
}
