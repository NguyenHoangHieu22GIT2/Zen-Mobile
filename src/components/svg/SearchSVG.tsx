import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

const SearchSVG = () => {
  return (
    <View>
      <Svg width={26} height={28} viewBox="0 0 24 25" fill="none">
        <Path
          d="M11 19.5352C15.4183 19.5352 19 15.9534 19 11.5352C19 7.11688 15.4183 3.53516 11 3.53516C6.58172 3.53516 3 7.11688 3 11.5352C3 15.9534 6.58172 19.5352 11 19.5352Z"
          stroke="#5669FF"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          opacity={0.4}
          d="M21 21.5352L16.65 17.1852"
          stroke="#5669FF"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};

export default SearchSVG;
