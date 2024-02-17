import { View, Image, Switch } from "react-native";
import { router } from "expo-router";
import { COLORS, IMAGES } from "@/constants";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from "react";
import {
  AuthTextInput,
  BigZenLogo,
  EmailSVG,
  FacebookSVG,
  FontText,
  GoogleSVG,
  PasswordSVG,
  PressableText,
  RectangleButton
} from "@/components";

export default function SignInForm() {
  const [rememberMe, setRememberMe] = useState(false);
  return (
    <View className="flex-1 justify-center items-center ">
      <Image source={IMAGES.appbackground} className="w-full h-full absolute" />
      <BigZenLogo className="mt-8" />

      <View className="w-full px-8 gap-4 mt-8">
        <FontText className="text-2xl mb-1 ">Sign in</FontText>
        <AuthTextInput SVGIconElement={<EmailSVG />} label="abc@email.com" />
        <AuthTextInput
          SVGIconElement={<PasswordSVG />}
          label="Your password"
          password
        />
        <View className="flex-row items-center">
          <Switch
            value={rememberMe}
            onValueChange={() => setRememberMe((prev) => !prev)}
            trackColor={{ true: COLORS.primary }}
            thumbColor="white"
          />
          <FontText className="flex-1">Remember Me</FontText>
          <PressableText text="Forgot Password?" className="text-right" />
        </View>
        <RectangleButton
          text="SIGN IN"
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
        <View className="flex-row items-center justify-center">
          <FontText>Don't have an account? </FontText>
          <PressableText
            text="Sign up"
            className="text-primary"
            onPress={() => router.push("/register/")}
          />
        </View>
      </View>
    </View>
  );
}
