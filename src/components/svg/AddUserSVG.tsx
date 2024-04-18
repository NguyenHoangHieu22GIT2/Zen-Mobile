import { Svg, Path } from "react-native-svg";

const AddUserSVG = ({ width, height, strokeColor }) => (
  <Svg width={width} height={height} viewBox="0 0 22 22" fill="none">
    <Path
      d="M14.6667 19.25V17.4167C14.6667 16.4442 14.2804 15.5116 13.5927 14.8239C12.9051 14.1363 11.9725 13.75 11 13.75H4.58333C3.61087 13.75 2.67824 14.1363 1.99061 14.8239C1.30298 15.5116 0.916668 16.4442 0.916668 17.4167V19.25"
      stroke={strokeColor}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7.79167 10.0833C9.81671 10.0833 11.4583 8.44171 11.4583 6.41667C11.4583 4.39162 9.81671 2.75 7.79167 2.75C5.76662 2.75 4.125 4.39162 4.125 6.41667C4.125 8.44171 5.76662 10.0833 7.79167 10.0833Z"
      stroke={strokeColor}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M18.3333 7.33331V12.8333"
      stroke={strokeColor}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M21.0833 10.0833H15.5833"
      stroke={strokeColor}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default AddUserSVG;
