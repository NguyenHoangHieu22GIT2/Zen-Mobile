import { View } from "react-native";
import { Path, Svg } from "react-native-svg";

export default function EmailSVG() {
  return (
    <View>
      <Svg width={22} height={22} viewBox="0 0 22 22" fill="none">
        <Path
          d="M15.8287 8.30603L11.9187 11.4541C11.1788 12.0342 10.1415 12.0342 9.40156 11.4541L5.45801 8.30603"
          stroke="#807A7A"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.31386 3.20833H14.9561C16.2022 3.2223 17.3883 3.7491 18.238 4.66601C19.0877 5.58293 19.527 6.80994 19.4535 8.06127V14.0452C19.527 15.2965 19.0877 16.5235 18.238 17.4404C17.3883 18.3573 16.2022 18.8841 14.9561 18.8981H6.31386C3.63728 18.8981 1.83331 16.7206 1.83331 14.0452V8.06127C1.83331 5.38582 3.63728 3.20833 6.31386 3.20833Z"
          stroke="#807A7A"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
}
