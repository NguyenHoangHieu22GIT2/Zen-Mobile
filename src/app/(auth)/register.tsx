import { ImageBackground, View } from "react-native";
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
  BackSvg
} from "@/components";
import AuthTextInputPassword from "@/components/auth/AuthTextInputPassword";
import { useRegister } from "@/hook/auth/useRegister";
import { IMAGES } from "@/constants";
export default function SignUpForm() {
  const { changeInputs, submitRegister, inputs, isLoading } = useRegister();

  return (
    <ImageBackground className="h-full" source={IMAGES.appbackground}>
      <View className="h-16" />
      <View className="w-full px-8 mb-10">
        <BackSvg />
      </View>
      <View className="w-full px-8 gap-4">
        <FontText className="text-2xl mb-1 ">Sign up</FontText>

        <AuthTextInput
          clearTextOnFocus
          value={inputs.username}
          onChangeText={(value) => changeInputs("username", value)}
          SVGIconElement={<ProfileSvg />}
          label="Username"
        />
        <AuthTextInput
          value={inputs.email}
          onChangeText={(value) => changeInputs("email", value)}
          SVGIconElement={<EmailSVG />}
          label="abc@email.com"
        />
        <AuthTextInputPassword
          value={inputs.password}
          onChangeText={(value) => changeInputs("password", value)}
          SVGIconElement={<PasswordSVG />}
          label="Your password"
        />
        <AuthTextInputPassword
          value={inputs.confirmPassword}
          onChangeText={(value) => changeInputs("confirmPassword", value)}
          SVGIconElement={<PasswordSVG />}
          label="Confirm password"
        />
        <RectangleButton
          disabled={isLoading}
          className="mt-5"
          text={isLoading ? "Processing.." : "SIGN UP"}
          iconRight={
            !isLoading && (
              <FontAwesome
                name="arrow-right"
                className="bg-black/15 py-2 px-2.5 rounded-full absolute right-3"
                color="white"
              />
            )
          }
          onPress={submitRegister}
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
          className="text-primary"
          onPress={() => router.push("/login/")}
        >
          Sign in
        </PressableText>
      </View>
    </ImageBackground>
  );
}
