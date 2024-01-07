import {CustomTheme} from '../../../utils/theme/CustomTheme';
import {TextStyle, ViewStyle} from 'react-native';
import {FontSize, Sizes, Spacing} from '../../../utils/values/dimens';
import appStyles from '../../../utils/styles/styles';
import {FontFamily} from '../../../utils/styles/fonts';

export interface Styles {
  container: ViewStyle;
  greetingText: TextStyle;
  infoContainer: ViewStyle;
  infoTextContainer: ViewStyle;
  infoText: TextStyle;
  rowContainer: ViewStyle;
  commonFlex: ViewStyle;
  searchButton: ViewStyle;
  buttonText: TextStyle;
  titleText: TextStyle;
  signView: ViewStyle;
  signText: TextStyle;
  signContainer: ViewStyle;
  imageContainer: ViewStyle;
}

/**
 * Returns the styles for Icon component
 * @param {CustomTheme} theme - The current theme object
 * @return {Styles} - The object containing the styles for the component
 */
const getStyles = (theme: CustomTheme): Styles => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  greetingText: {
    ...appStyles.text,
    fontFamily: FontFamily.SEMI_BOLD,
    color: theme.colors.text,
    marginBottom: Spacing.NORMAL,
    fontWeight: '500',
    marginTop: Spacing.SMALL,
    marginStart: Spacing.SMALL,
    fontSize: FontSize.LARGE,
  },
  infoContainer: {
    borderRadius: Sizes.BorderRadius,
    borderColor: theme.colors.xLightGrey,
    borderWidth: Sizes.BorderRadiusWidth,
    margin: Spacing.SMALL,
    padding: Spacing.X_SMALL,
    backgroundColor: theme.colors.backgroundTransparent50,
  },
  infoTextContainer: {
    marginTop: Spacing.XX_SMALL,
    borderColor: theme.colors.xxLightGrey,
    borderWidth: Sizes.BorderRadiusWidth,
    borderRadius: Spacing._6,
    padding: Spacing.X_SMALL,
    backgroundColor: theme.colors.lightSkyBlue,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoText: {
    color: theme.colors.black,
    ...appStyles.text,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Spacing.XXX_SMALL,
  },
  commonFlex: {
    flex: 1,
  },
  searchButton: {
    marginTop: Spacing.SMALL,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    padding: Spacing.X_SMALL,
    alignSelf: 'stretch',
    borderRadius: Spacing._6,
    marginBottom: Spacing.XXXX_SMALL,
  },
  buttonText: {
    fontWeight: '600',
    color: theme.colors.white,
  },
  titleText: {
    ...appStyles.text,
    fontFamily: FontFamily.SEMI_BOLD,
    color: theme.colors.text,
    fontWeight: '400',
    marginTop: Spacing.SMALL,
  },
  signView: {
    height: Spacing._40,
    width: Spacing._40,
    borderRadius: Spacing._20,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.lightSkyBlue,
    marginStart: Spacing.SMALL,
  },
  signText: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: FontSize.LARGE,
  },
  signContainer: {
    flexDirection: 'row',
    marginStart: Spacing.SMALL,
    marginTop: Spacing.XX_SMALL,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
});

export default getStyles;
