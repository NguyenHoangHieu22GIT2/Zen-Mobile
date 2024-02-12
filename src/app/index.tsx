import { Link, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Page() {
  // const { top } = useSafeAreaInsets();
  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Text>This is a loading page</Text>
      <ActivityIndicator size="large" color="gray" />
      <Link
        href={{
          pathname: "/sign-in/"
        }}
      >
        Go to sign in page
      </Link>
    </View>
  );
}
