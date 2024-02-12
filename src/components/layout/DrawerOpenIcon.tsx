import { DrawerActions, useNavigation } from "@react-navigation/native";
import { Image, TouchableOpacity } from "react-native";

export default function DrawerOpenIcon({ source }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
    >
      <Image className="rounded-full w-8 h-8" source={source} />
    </TouchableOpacity>
  );
}
