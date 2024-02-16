import { Link } from "expo-router";
import { ActivityIndicator, Text, View } from "react-native";

export default function Page() {
  // const { top } = useSafeAreaInsets();
  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Text>This is a loading page</Text>
      <ActivityIndicator size="large" color="gray" />
      <Link
        href={{
          pathname: "/sign-in/",
        }}
      >
        Go to sign in page
      </Link>
    </View>
  );
}
