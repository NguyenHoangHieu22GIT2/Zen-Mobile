import Svg, { Path } from "react-native-svg";

function BackSvg(props: { fill?: string }) {
  return (
    <Svg width={22} height={22} viewBox="0 0 22 22" fill="none">
      <Path
        d="M19.617 11H4.583M11 17.417L4.583 11 11 4.583"
        stroke={props.fill ?? "#120D26"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default BackSvg;
