import { View } from "react-native";
import { Path, Rect, Svg } from "react-native-svg";

export default function EyeSlashSVG() {
  return (
    <View>
      <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.0955 17.9607C11.3879 17.9865 11.6893 18 12 18C16.9091 18 21 12 21 12C21 12 20.3304 11.0179 19.2079 9.84836L11.0955 17.9607Z"
          fill="#979797"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.5051 6.49485C13.7076 6.18695 12.8665 6 12 6C5.45455 6 3 12 3 12C3 12 3.75006 13.8335 5.52661 15.4734L9 12C9 10.3431 10.3431 9 12 9L14.5051 6.49485Z"
          fill="#979797"
        />
        <Rect
          opacity={0.3}
          x={5.1}
          y={18.435}
          width={19}
          height={2}
          transform="rotate(-45 5.1 18.435)"
          fill="#979797"
        />
      </Svg>
    </View>
  );
}
