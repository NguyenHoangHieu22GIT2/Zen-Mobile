import { View } from "react-native";
import { Path, Svg } from "react-native-svg";

export default function EyeSVG() {
  return (
    <View>
      <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 6C5.45455 6 3 12 3 12C3 12 5.45455 18 12 18C16.9091 18 21 12 21 12C21 12 16.9091 6 12 6ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z"
          fill="#979797"
        />
      </Svg>
    </View>
  );
}
