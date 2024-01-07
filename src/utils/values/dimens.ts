import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Dimensions, Platform, StyleSheet} from 'react-native';

/**
 * Collection of Dimensions Sizes based on Platform
 * */

/**
 * Calculate responsive scale based on device's width and height
 */
const {width, height} = Dimensions.get('window');
export const ScreenWidth = width;
export const ScreenHeight = height;

/**
 * @return Font Size based on Device
 * */
export const FontSize = {
  XX_LARGE: Platform.select({
    ios: 24,
    android: 23,
  }),

  X_LARGE: Platform.select({
    ios: 22,
    android: 21,
  }),

  LARGE: Platform.select({
    ios: 20,
    android: 19,
  }),

  // Synced with Devices
  MEDIUM: Platform.select({
    ios: 17,
    android: 16,
  }),

  // Synced with Devices
  NORMAL: Platform.select({
    ios: 14.5,
    android: 14,
  }),
  SMALL: Platform.select({
    ios: 14,
    android: 13,
  }),
  VERY_SMALL: Platform.select({
    ios: 13,
    android: 12,
  }),
  TINY: Platform.select({
    ios: 12,
    android: 11,
  }),
  VERY_TINY: Platform.select({
    ios: 10,
    android: 9,
  }),
};

/**
 * @return Flex Grow Size
 * */
export const FlexGrow = {
  _1: 1,
};

/**
 * @return Sizes based on Device
 * */
export const Sizes = {
  // Synced with Devices
  BorderRadius: 13,

  CircleBorderRadius: 50,

  // Synced with Devices
  BorderRadiusWidth: Platform.select({
    ios: 0.5,
    android: 0.7,
  }),

  // Synced with Devices
  DividerWidth: StyleSheet.hairlineWidth,

  // Synced with Devices
  ButtonHeight: Platform.select({
    ios: 47,
    android: 45,
  }),

  // Synced with Devices
  ProgressBarSize: Platform.select({
    ios: 47,
    android: 45,
  }),

  // Synced with Devices
  TextInputBorderRadius: 8,

  // Synced with Devices
  ToolbarHeightSize: Platform.select({
    ios: 56,
    android: 56,
  }),

  BorderWidth: 2,
  BottomNavigationBarHeight: 60,

  // Project Based Sizes
  ListingProfilePictureSize: 54,
};

/**
 * @return Spacing based on Device
 * */
export const Spacing = {
  _0: 0,

  // Synced with Devices
  XX_LARGE: 50,

  // Synced with Devices
  X_LARGE: 40,

  // Synced with Devices
  LARGE: 30,

  // Synced with Devices
  MEDIUM: 25,

  // Synced with Devices
  NORMAL: 20,

  // Synced with Devices
  SMALL: 15,

  // Synced with Devices
  X_SMALL: 10,

  // Synced with Devices
  XX_SMALL: 8,

  // Synced with Devices
  XXX_SMALL: 5,

  // Synced with Devices
  XXXX_SMALL: 3,

  /**
   * Ascending Spaces
   * */
  _1: 1,
  _1_5: 1.5,
  _2: 2,
  _3: 3,
  _4: 4,
  _5: 5,
  _6: 6,
  _7: 7,
  _8: 8,
  _9: 9,
  _10: 10,
  _11: 11,
  _12: 12,
  _13: 13,
  _14: 14,
  _15: 15,
  _16: 16,
  _17: 17,
  _18: 18,
  _19: 19,
  _20: 20,
  _21: 21,
  _22: 22,
  _23: 23,
  _24: 24,
  _25: 25,
  _26: 26,
  _27: 27,
  _28: 28,
  _29: 29,
  _30: 30,
  _31: 31,
  _32: 32,
  _33: 33,
  _34: 34,
  _35: 35,
  _36: 36,
  _37: 37,
  _38: 38,
  _39: 39,
  _40: 40,
  _41: 41,
  _42: 42,
  _43: 43,
  _44: 44,
  _45: 45,
  _46: 46,
  _47: 47,
  _48: 48,
  _49: 49,
  _50: 50,
  _51: 51,
  _52: 52,
  _53: 53,
  _54: 54,
  _55: 55,
  _56: 56,
  _57: 57,
  _58: 58,
  _59: 59,
  _60: 60,
  _61: 61,
  _62: 62,
  _63: 63,
  _64: 64,
  _65: 65,
  _66: 66,
  _67: 67,
  _68: 68,
  _69: 69,
  _70: 70,
  _71: 71,
  _72: 72,
  _73: 73,
  _74: 74,
  _75: 75,
  _76: 76,
  _77: 77,
  _78: 78,
  _79: 79,
  _80: 80,
  _81: 81,
  _82: 82,
  _83: 83,
  _84: 84,
  _85: 85,
  _86: 86,
  _87: 87,
  _88: 88,
  _89: 89,
  _90: 90,
  _91: 91,
  _92: 92,
  _93: 93,
  _94: 94,
  _95: 95,
  _96: 96,
  _97: 97,
  _98: 98,
  _99: 99,
  _100: 100,
  _120: 120,
  _128: 128,
  _160: 160,
  _200: 200,
};

/**
 * Returns the height of the safe area at the top of the screen.
 *
 * @returns {number} The height of the safe area at the top.
 */
export function getSafeAreaTop(): number {
  // Get the safe area insets using the useSafeAreaInsets hook
  const insets = useSafeAreaInsets();

  // Return the top inset value, which represents the height of the safe area at the top
  return insets.top;
}

/**
 * Retrieves the height of the safe area at the bottom of the screen.
 *
 * @returns The height of the safe area at the bottom of the screen.
 */
export function getSafeAreaBottom(): number {
  // Retrieve the safe area insets using the useSafeAreaInsets hook
  const insets = useSafeAreaInsets();

  // Return the height of the safe area at the bottom
  return insets.bottom;
}
