import { Svg, Path } from "react-native-svg";

const RightArrowSVG = ({ width, height, strokeColor }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    stroke={strokeColor}
    strokeWidth="2"
    fill="none"
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m8.25 4.5 7.5 7.5-7.5 7.5"
    />
  </Svg>
);

export default RightArrowSVG;
