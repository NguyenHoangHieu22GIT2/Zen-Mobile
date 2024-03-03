import { COLORS } from "@/constants";
import { View } from "react-native";
import { Svg, Path } from "react-native-svg";

interface HeartSVGProps {
  active?: boolean;
}

const HeartSVG = ({ active = false }: HeartSVGProps) => {
  return (
    <View>
      <Svg
        width={18}
        height={17}
        viewBox="0 0 18 17"
        fill={active ? COLORS.primary : "none"}
      >
        <Path
          d="M15.7663 2.7377C15.3753 2.34531 14.9111 2.03404 14.4002 1.82168C13.8893 1.60931 13.3417 1.5 12.7887 1.5C12.2357 1.5 11.6881 1.60931 11.1772 1.82168C10.6663 2.03404 10.2021 2.34531 9.81116 2.7377L8.9998 3.55166L8.18843 2.7377C7.39874 1.94548 6.32768 1.50041 5.21089 1.50041C4.09409 1.50041 3.02303 1.94548 2.23334 2.7377C1.44365 3.52993 1 4.60441 1 5.72479C1 6.84516 1.44365 7.91965 2.23334 8.71187L3.0447 9.52583L8.9998 15.5L14.9549 9.52583L15.7663 8.71187C16.1574 8.31967 16.4677 7.854 16.6794 7.34146C16.891 6.82893 17 6.27958 17 5.72479C17 5.17 16.891 4.62064 16.6794 4.10811C16.4677 3.59558 16.1574 3.1299 15.7663 2.7377V2.7377Z"
          stroke={active ? COLORS.primary : "#BDBDBD"}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};

export default HeartSVG;
