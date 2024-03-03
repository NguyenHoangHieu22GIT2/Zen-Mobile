import ShareSVG from "@/components/svg/ShareSVG";
import { TouchableOpacity } from "react-native";

export default function ShareReaction() {
  return (
    <TouchableOpacity onPress={() => {}}>
      <ShareSVG />
    </TouchableOpacity>
  );
}
