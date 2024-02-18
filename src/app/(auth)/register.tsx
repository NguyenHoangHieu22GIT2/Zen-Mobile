import { View } from "react-native";
import { router } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  AuthTextInput,
  RectangleButton,
  FontText,
  EmailSVG,
  FacebookSVG,
  GoogleSVG,
  PasswordSVG,
  PressableText,
  ProfileSvg,
  BackSvg,
  TopWrapperView
} from "@/components";
import AuthTextInputPassword from "@/components/common/AuthTextInputPassword";
export default function SignUpForm() {
  return (
    <TopWrapperView className="mt-8">
      <View className="w-full px-8 mb-10">
        <BackSvg />
      </View>
      <View className="w-full px-8 gap-4">
        <FontText className="text-2xl mb-1 ">Sign up</FontText>

        <AuthTextInput SVGIconElement={<ProfileSvg />} label="Full Name" />
        <AuthTextInput SVGIconElement={<EmailSVG />} label="abc@email.com" />
        <AuthTextInputPassword
          SVGIconElement={<PasswordSVG />}
          label="Your password"
        />
        <AuthTextInputPassword
          SVGIconElement={<PasswordSVG />}
          label="Confirm password"
        />
        <RectangleButton
          className="mt-5"
          text="SIGN UP"
          iconRight={
            <FontAwesome
              name="arrow-right"
              className="bg-black/15 py-2 px-2.5 rounded-full absolute right-3"
              color="white"
            />
          }
          onPress={() => {
            router.push("/popular/");
          }}
        />
      </View>
      <View className="w-full px-8 gap-3 mt-10">
        <FontText className="text-center opacity-50">OR</FontText>
        <RectangleButton
          text="Login with Google"
          iconLeft={<GoogleSVG />}
          className="gap-5"
          secondary
        />
        <RectangleButton
          text="Login with Facebook"
          iconLeft={<FacebookSVG />}
          className="gap-5 !py-4"
          secondary
        />
      </View>
      <View className="flex-row items-center mt-6 justify-center">
        <FontText>Already have an account? </FontText>
        <PressableText
          text="Signin"
          className="text-primary"
          onPress={() => router.push("/login/")}
        />
      </View>
    </TopWrapperView>
  );
}
