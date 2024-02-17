const COLORS = {
  primary: "#5669ff",
  secondary: "#eef0ff",
  // tertiary: "#FF7754",

  lightblack: "#37364a",

  lightgray: "#bdbdbd",
  gray: "#83829A",
  gray2: "#C1C0C8",

  white: "#F3F4F8",
  lightWhite: "#FAFAFC"
};

const FONT = {
  light: "AirBnbLight",
  book: "AirBnbBook",
  medium: "AirBnbMedium",
  bold: "AirBnbBold",
  Extrabold: "AirBnbExtrabold",
  black: "AirBnbBlack"
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5
  }
};

const tintColorLight = "#2f95dc";
const tintColorDark = "#fff";
const THEMES = {
  light: {
    text: "#000",
    background: "#fff",
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight
  },
  dark: {
    text: "#fff",
    background: "#000",
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark
  }
};

export { COLORS, FONT, SIZES, SHADOWS, THEMES };
