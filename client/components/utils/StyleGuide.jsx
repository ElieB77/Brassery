import { Platform } from "react-native";

const shadow =
    Platform.OS === "ios"
        ? {
              shadowColor: "rgba(0, 0, 0, 0.25)",
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: 0.4,
              shadowRadius: 3,
          }
        : { elevation: 10 };

const StyleGuide = {
  colors: {
    primary: '#EBC56E',
    secondary: '#435E75',
    third: '#E6D8C1',
    white: '#FFFDFB',
    black: '#3C3C3B',
    gray: '#C4C4C4',
    green: '#56A754',
    red: '#BB312C',
    lowOpacity: 'rgba(235,187,110,0.3)',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFDFB',
    paddingTop: 45,
    paddingBottom: 45,
    paddingLeft: 25,
    paddingRight: 25,
  },
  typography: {
    text1: {
      fontSize: 20,
      lineHeight: 27,
      textTransform: 'uppercase',
      fontFamily: 'Manrope_700Bold',
    },
    text2: {
      fontSize: 24,
      lineHeight: 33,
      fontFamily: 'Manrope_700Bold',
    },
    text3: {
      fontSize: 12,
      lineHeight: 16,
      fontFamily: 'Manrope_700Bold',
    },
    text4: {
      fontSize: 10,
      lineHeight: 14,
      fontFamily: 'Manrope_700Bold',
    },
    text5: {
      fontSize: 18,
      lineHeight: 30,
      fontFamily: 'Manrope_700Bold',
    },
    overline: {
      fontSize: 14,
      lineHeight: 19,
      fontFamily: 'Manrope_700Bold',
    },
    linkText: {
      textDecorationLine: 'underline',
    },
    textButton: {
      fontSize: 12,
      lineHeight: 16,
      fontFamily: 'Manrope_700Bold',
    },
  },

  borderRadius: 8,
  shadowProp: shadow,

  divider: {
    marginVertical: 20,
    width: '75%',
    height: 1,
  },
};

export default StyleGuide;
