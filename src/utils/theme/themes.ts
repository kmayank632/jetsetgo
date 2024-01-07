import type {CustomTheme} from './CustomTheme';

export const commonColors = {
  primary: '#2482C2',
  red: '#D50000',
  green: '#00BC45',
  grey: '#646464',
  black: '#000000',
  lightBlue: 'rgba(201,229,255,0.5)',
  veryLightGrey: '#EEEEEE',
  lightGrey: '#DADADA',
  lightGreen: '#D6EFD4',
  lightRed: '#F4DADC',
  xLightGrey: '#DFE1E4',
  xxLightGrey: '#F3F4F5',
  lightSkyBlue: '#f2f9ff',
  skyBlue: '#cbdcec',
  white: '#ffffff',
  lightPurple: '#C0B2F1',
  xLightGreen: '#58BD52',
  veryLightGreen: '#EAFDED',
  veryLightBlue: '#F2F7FE',
  veryLightRed: '#FDF5F2',
  veryLightOrange: '#FFF5E5',
  veryLightYellow: '#FFF8E9',
  veryDarkGrey: '#797979',
  blackSecondary: '#131C2C',
  secondaryColor: '#EDF0FF',
  secondaryAccent: '#D7E2FF',
  darkBlue: '#1C3A87',
  yellow: '#FFC107',
  darkGray: '#333333',
  darkTealGreen: '#008069',
};

/**
 * Light Mode Theme of @typedef CustomTheme
 */
export const LightTheme: CustomTheme = {
  dark: false,
  colors: {
    ...commonColors,
    background: '#FFFFFF',
    backgroundSecondary: '#F3F4F5',
    backgroundInvert: 'rgb(0,0,0)',
    backgroundInvert5: 'rgba(0,0,0,0.05)',
    backgroundInvert20: 'rgba(0,0,0,0.1)',
    backgroundTransparent80: 'rgba(255,255,255,0.8)',
    backgroundTransparent50: 'rgba(255,255,255,0.5)',
    card: 'rgb(255, 255, 255)',
    text: '#000000',
    border: '#616161',
    notification: 'rgb(255, 59, 48)',
    textHint: '#646464',
    divider: '#DADADA',
    mask: '#616161',
    drawable: '#616161',
    loadingBackground: 'rgba(0,0,0,0.4)',
    loadingSystemBar: '#999999',
    test: '#D50000',
    tilesBackground: '#FFFFFF',
    tilesIconColor: '#131C2C',
    lightGreen: commonColors.lightGreen,
    lightRed: commonColors.lightRed,
    xLightGrey: commonColors.xLightGrey,
    xxLightGrey: commonColors.xxLightGrey,
    blackSecondary: commonColors.blackSecondary,
    secondaryColor: commonColors.secondaryColor,
    secondaryAccent: commonColors.secondaryAccent,
    darkBlue: commonColors.darkBlue,
    yellow: commonColors.yellow,
  },
};

/**
 * Dark Mode Theme of @typedef CustomTheme
 */
export const DarkTheme: CustomTheme = {
  dark: true,
  colors: {
    ...commonColors,
    background: '#000000',
    backgroundSecondary: '#1f1f1f',
    backgroundInvert: 'rgb(255,255,255)',
    backgroundInvert5: 'rgba(255,255,255,0.05)',
    backgroundInvert20: 'rgba(255,255,255,0.1)',
    backgroundTransparent80: 'rgba(0,0,0,0.8)',
    backgroundTransparent50: 'rgba(0,0,0,0.5)',
    card: 'rgb(18, 18, 18)',
    text: '#FFFFFF',
    border: '#FFFFFF',
    notification: 'rgb(255, 69, 58)',
    textHint: '#C3C3C3',
    divider: '#797979',
    mask: 'rgba(255,255,255,0.5)',
    drawable: '#FFFFFF',
    loadingBackground: 'rgba(0,0,0,0.73)',
    loadingSystemBar: '#000000',
    tilesBackground: '#1f1f1f',
    tilesIconColor: '#797979',
    test: '#00BC45',
    lightGreen: commonColors.lightGreen,
    lightRed: commonColors.lightRed,
    xLightGrey: commonColors.xLightGrey,
    xxLightGrey: commonColors.xxLightGrey,
    secondaryColor: commonColors.secondaryColor,
    secondaryAccent: commonColors.secondaryAccent,
    darkBlue: commonColors.darkBlue,
    yellow: commonColors.yellow,
    blackSecondary: commonColors.blackSecondary,
  },
};