import { View } from "react-native";
import { Path, Svg } from "react-native-svg";

export default function PasswordSVG() {
  return (
    <View>
      <Svg width={22} height={22} viewBox="0 0 22 22" fill="none">
        <Path
          d="M15.0548 8.66048V6.6924C15.0548 4.38881 13.1866 2.52065 10.883 2.52065C8.57943 2.51056 6.70393 4.36956 6.69385 6.67406V6.6924V8.66048"
          stroke="#807A7A"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.3762 19.4788H7.372C5.4525 19.4788 3.896 17.9232 3.896 16.0028V12.0712C3.896 10.1508 5.4525 8.59521 7.372 8.59521H14.3762C16.2957 8.59521 17.8522 10.1508 17.8522 12.0712V16.0028C17.8522 17.9232 16.2957 19.4788 14.3762 19.4788Z"
          stroke="#807A7A"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M10.8743 13.0191V15.0551"
          stroke="#807A7A"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
}
