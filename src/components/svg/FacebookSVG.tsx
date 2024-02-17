import { View } from "react-native";
import { Path, Rect, Svg } from "react-native-svg";

export default function FacebookSVG() {
  return (
    <View>
      <Svg width={31} height={31} viewBox="0 0 31 31" fill="none">
        <Rect width={30.7551} height={30.7551} rx={15.3776} fill="#1977F3" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.0966 30.5151C17.2141 30.6726 16.3055 30.7548 15.3777 30.7548C14.5553 30.7548 13.7481 30.6902 12.9607 30.5659V20.2758H8.78754V15.5406H12.9607V11.9315C12.9607 7.8269 15.4129 5.55893 19.1683 5.55893C20.4007 5.5761 21.6303 5.68308 22.847 5.87903V9.91059H20.7735C18.7321 9.91059 18.0966 11.1732 18.0966 12.47V15.5413H22.6546L21.926 20.2758H18.0966V30.5151Z"
          fill="white"
        />
      </Svg>
    </View>
  );
}
