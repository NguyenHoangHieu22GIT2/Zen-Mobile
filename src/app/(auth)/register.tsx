import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
export default function SignUpForm() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Text>This is SignUpForm</Text>
      <TouchableOpacity
        onPress={() => {
          router.push("/login/");
        }}
      >
        <Text>Go to sign-in page</Text>
      </TouchableOpacity>
    </View>
  );
}
