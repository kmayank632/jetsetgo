import type {Theme} from '@react-navigation/native';

/**
 * Custom 'type' for Theme to
 * Add New Parameters into @typedef Theme
 */
export type CustomTheme = Theme & {
  colors: {
    backgroundSecondary: string;
    textHint: string;
    divider: string;
    mask: string;
    drawable: string;
    backgroundInvert: string;
    backgroundInvert5: string;
    backgroundInvert20: string;
    backgroundTransparent80: string;
    backgroundTransparent50: string;
    loadingBackground: string;
    loadingSystemBar: string;
    red: string;
    green: string;
    black: string;
    grey: string;
    veryLightGrey: string;
    lightGrey: string;
    lightBlue: string;
    test: string;
    lightSkyBlue: string;
    skyBlue: string;
    white: string;
    blackSecondary: string;
    secondaryColor: string;
    secondaryAccent: string;
    lightGreen: string;
    lightRed: string;
    xLightGrey: string;
    xxLightGrey: string;
    darkBlue: string;
    yellow: string;
    tilesBackground: string;
    tilesIconColor: string;
  };
};
