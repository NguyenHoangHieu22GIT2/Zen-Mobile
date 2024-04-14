import { Svg, Path } from "react-native-svg";

const XSVG = ({ width, height, strokeColor, strokeWidth }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    stroke={strokeColor}
    strokeWidth={strokeWidth}
    fill="none"
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18 18 6M6 6l12 12"
    />
  </Svg>
);

export default XSVG;
