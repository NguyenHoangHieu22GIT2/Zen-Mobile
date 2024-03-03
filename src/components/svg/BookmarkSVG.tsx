import { COLORS } from "@/constants";
import { View } from "react-native";
import { Svg, Path } from "react-native-svg";

interface BookmarkSVGProps {
  active?: boolean;
}

const BookmarkSVG = ({ active = false }: BookmarkSVGProps) => (
  <View>
    <Svg
      width={13}
      height={15}
      viewBox="0 0 13 15"
      fill={active ? COLORS.primary : "none"}
    >
      <Path
        d="M2.16667 0H10.8333C12.0276 0 13 0.700633 13 1.56249V14.6875C13 14.8137 12.8943 14.9281 12.7322 14.9756C12.5701 15.025 12.3838 14.9975 12.2599 14.9081L6.50001 10.7544L0.740161 14.9087C0.656961 14.9681 0.546014 15 0.433361 15C0.377908 15 0.321562 14.9925 0.267815 14.9762C0.105762 14.9281 1.52588e-05 14.8137 1.52588e-05 14.6875V1.56252C1.52588e-05 0.701249 0.972414 0 2.16667 0ZM1.5 13L5.96839 9.6831C6.05334 9.62249 6.38905 9.5 6.5 9.5C6.61095 9.5 6.91506 9.62185 7.00001 9.6831L11.5 13V2.5C11.5 1.98312 10.9167 1.5625 10.2 1.5625L2.1667 1.49498C1.44996 1.49498 1.50004 1.98312 1.50004 2.5L1.5 13Z"
        fill={active ? COLORS.primary : "#BDBDBD"}
      />
    </Svg>
  </View>
);

export default BookmarkSVG;
