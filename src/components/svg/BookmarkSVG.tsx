import { COLORS } from "@/constants";
import { Svg, Path } from "react-native-svg";

interface BookmarkSVGProps {
  isActive?: boolean;
}

const BookmarkSVG = ({ isActive = false }: BookmarkSVGProps) => (
  <Svg
    width={20}
    height={22}
    viewBox="0 0 24 24"
    fill={isActive ? COLORS.primary : COLORS.gray2}
  >
    <Path
      d="M19,20.6l-7-2.6l-7,2.6L5,4c0-0.5,0.4-1,1-1h12c0.6,0,1,0.4,1,1V20.6z"
      opacity={isActive ? 1 : 0}
    />
    <Path d="M4,22L4,4c0-1.1,0.9-2,2-2h12c1.1,0,2,0.9,2,2v18l-8-3L4,22z M12,16.9l6,2.3V4H6l0,15.1L12,16.9z" />
  </Svg>
);

export default BookmarkSVG;
