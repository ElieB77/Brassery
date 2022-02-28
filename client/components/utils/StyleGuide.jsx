const StyleGuide = {
  colors: {
    primary: "#EBC56E",
    secondary: "#435E75",
    third: "#E6D8C1",
    white: "#FFFDFB",
    black: "#3C3C3B",
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFDFB",
    paddingTop: 45,
    paddingBottom: 45,
    paddingLeft: 25,
    paddingRight: 25,
  },
  typography: {
    text1: {
      fontSize: 20,
      lineHeight: 27,
      textTransform: "uppercase",
      fontFamily: "Manrope_700Bold",
    },
    text2: {
      fontSize: 24,
      lineHeight: 33,
      fontFamily: "Manrope_700Bold",
    },
    text3: {
      fontSize: 12,
      lineHeight: 16,
      fontFamily: "Manrope_700Bold",
    },
    text4: {
      fontSize: 10,
      lineHeight: 14,
      fontFamily: "Manrope_700Bold",
    },
    textButton: {
      fontSize: 12,
      lineHeight: 16,
      fontFamily: "Manrope_700Bold",
    },
  },
  borderRadius: 8,
  shadowProp: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: -2, height: 4 },
    shadowOffsetInput: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
};

export default StyleGuide;
