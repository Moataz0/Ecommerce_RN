import {Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

export const COLORS = {
  primary: '#FFF', //orange
  secondary: '#2c2c2c',
  transparentPrimary: '#f7a892',
  orange: '#FFA133',
  yellow: '#F1CD7C',
  lightYellow: '#FFD88A',
  lightOrange: '#FFA133',
  lightOrange2: '#FDDED4',
  lightOrange3: '#FFD9AD',
  green: '#27AE60',
  red: '#E13510',
  red2: '#FF6C44',
  blue: '#0064C0',
  darkBlue: '#111A2C',
  darkGray: '#525C67',
  darkGray2: '#757D85',
  gray: '#898B9A',
  gray2: '#BBBDC1',
  gray3: '#CFD0D7',
  lightGray1: '#DDDDDD',
  lightGray2: '#F5F5F8',
  lightGray3: '#E2E2E2',
  white2: '#FBFBFB',
  white: '#FFFFFF',
  black: '#3D3942',

  transparent: 'transparent',
  transparentWhite1: 'rgba(255, 255, 255, 0.1)',
  transparentBlack1: 'rgba(0, 0, 0, 0.1)',
  transparentBlack7: 'rgba(0, 0, 0, 0.7)',
};
export const SIZES = {
  // Global sizes
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,

  // font sizes
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  h5: 12,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};
export const FONTS = {
  largeTitle: {fontFamily: 'Poppins-Black', fontSize: SIZES.largeTitle},
  h1: {fontFamily: 'Poppins-Bold', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: 'Poppins-Bold', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: 'Poppins-SemiBold', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: 'Poppins-SemiBold', fontSize: SIZES.h4, lineHeight: 22},
  h5: {fontFamily: 'Poppins-SemiBold', fontSize: SIZES.h5, lineHeight: 22},
  body1: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
  body5: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body5,
    lineHeight: 22,
  },
};

export const darkTheme = {
  name: 'dark',
  backgroundColor: COLORS.black,
  textColor: COLORS.white,
  tabBackroundColor: COLORS.lightGray1,
  cardBackgroundColor: COLORS.gray3,
  bottomTabBarBackgroundColor: COLORS.gray3,
  headerColor: COLORS.yellow,
};
export const lightTheme = {
  name: 'light',
  backgroundColor: COLORS.primary,
  textColor: COLORS.black,
  tabBackroundColor: COLORS.yellow,
  cardBackgroundColor: COLORS.lightYellow,
  bottomTabBarBackgroundColor: COLORS.lightYellow,
  headerColor: COLORS.red,
};

export const selectedTheme = darkTheme;

const appTheme = {SIZES, FONTS, COLORS, lightTheme, darkTheme};

export default appTheme;
