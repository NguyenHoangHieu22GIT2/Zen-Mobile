import Svg, { Ellipse, Path } from "react-native-svg";

function ProfileSvg(props) {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Ellipse
        cx={10.6141}
        cy={6.67152}
        rx={4.37986}
        ry={4.37986}
        stroke="#807A7A"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M3.667 17.143a2.03 2.03 0 01.201-.89c.42-.838 1.603-1.283 2.584-1.485a15.396 15.396 0 012.148-.302 22.975 22.975 0 014.02 0c.722.05 1.44.152 2.147.302.982.202 2.165.604 2.585 1.485a2.081 2.081 0 010 1.788c-.42.88-1.603 1.284-2.585 1.476-.707.158-1.425.262-2.148.31a23.67 23.67 0 01-3.272.051c-.252 0-.495 0-.747-.05a14.128 14.128 0 01-2.14-.31c-.99-.194-2.164-.596-2.592-1.477a2.09 2.09 0 01-.201-.898z"
        stroke="#807A7A"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ProfileSvg;
