import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Dimensions} from 'react-native';

export const FONT_WEIGHT = {
  thin: '100',
  extralight: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
};

export const FONT_SIZE = {
  xs: wp(2.5),
  sm: wp(3),
  base: wp(3.7),
  l: wp(4),
  lg: wp(4.5),
  xl: wp(5),
  '1.5xl': wp(5.8),
  '2xl': wp(7),
  '2.5xl': wp(8),
  '3xl': wp(9),
  '4xl': wp(11),
  '5xl': wp(12.5),
  '6xl': wp(14),
};

export const COLORS = {
  primary: '#6824ee',
  lightPrimary: '#926add',
  darkPrimary: '#30266d',
  secondry: '#DCEEC8',
  bgLight: '#e9f0ed',
  black: '#222',
  white: '#fff',
  grey: 'grey',
  lightGrey: 'lightgrey',
  transparent: 'transparent',
  skyblue: '#00A9E8',
  red: '#e6543e',
  accent: '#FF8C00',
  accentLight: '#E9A06C',
};

const {width, height} = Dimensions.get('screen');
export const D = {
  width,
  height,
};

export {wp, hp};
