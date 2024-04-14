import { Svg, Path } from "react-native-svg";

const DownArrowSVG = ({ width, height, strokeColor }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    stroke={strokeColor}
    strokeWidth="1.5"
    fill="none"
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m19.5 8.25-7.5 7.5-7.5-7.5"
    />
  </Svg>
);

export default DownArrowSVG;
