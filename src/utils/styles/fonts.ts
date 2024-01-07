/**
 * Custom Font Family Components
 */

/**
 * Reference for Custom Fonts
 * link: https://kswanie21.medium.com/custom-fonts-in-react-native-tutorial-for-ios-android-76ceeaa0eb78
 * */
export const FontFamilyMap = {
  matterBold: 'Matter-Bold',
  matterBoldItalic: 'Matter-BoldItalic',
  matterHeavy: 'Matter-Heavy',
  matterHeavyItalic: 'Matter-Heavy',
  matterLight: 'Matter-Light',
  matterLightItalic: 'Matter-LightItalic',
  matterMedium: 'Matter-Medium',
  matterMediumItalic: 'Matter-MediumItalic',
  matterRegular: 'Matter-Regular',
  matterRegularItalic: 'Matter-RegularItalic',
  matterSemiBold: 'Matter-SemiBold',
  matterSemiBoldItalic: 'Matter-SemiBoldItalic',
} as const;

export const FontFamily = {
  LIGHT: FontFamilyMap.matterLight,
  REGULAR: FontFamilyMap.matterRegular,
  REGULAR_ITALIC: FontFamilyMap.matterRegularItalic,
  MEDIUM: FontFamilyMap.matterMedium,
  SEMI_BOLD: FontFamilyMap.matterSemiBold,
  BOLD: FontFamilyMap.matterBold,
};
