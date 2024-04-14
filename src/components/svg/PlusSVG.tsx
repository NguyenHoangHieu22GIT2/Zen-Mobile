import { Svg, Path } from "react-native-svg";

const PlusSVG = ({ width, height }) => (
  <Svg width={width} height={height} viewBox="0 0 22 22" fill="none">
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15.6857 1H6.31429C3.04762 1 1 3.31208 1 6.58516V15.4148C1 18.6879 3.0381 21 6.31429 21H15.6857C18.9619 21 21 18.6879 21 15.4148V6.58516C21 3.31208 18.9619 1 15.6857 1Z"
      fill="white"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11 5.40002V16.6"
      stroke="#5669FF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16.6 11H5.40002"
      stroke="#5669FF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default PlusSVG;
