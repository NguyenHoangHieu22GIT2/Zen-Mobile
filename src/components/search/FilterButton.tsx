import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import FilterSVG from "../svg/FilterSVG";
import FontText from "../common/FontText";

export default function FilterButton(props: TouchableOpacityProps) {
  return (
    <TouchableOpacity
      className="flex-row gap-2 rounded-full p-2 bg-primary"
      {...props}
    >
      <FilterSVG />
      <FontText className="color-white">Filters</FontText>
    </TouchableOpacity>
  );
}
