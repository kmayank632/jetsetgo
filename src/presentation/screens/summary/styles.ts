import {CustomTheme} from '../../../utils/theme/CustomTheme';
import {TextStyle, ViewStyle} from 'react-native';
import appStyles from '../../../utils/styles/styles';
import {FontSize, Sizes, Spacing} from '../../../utils/values/dimens';
import {FontFamily} from '../../../utils/styles/fonts';

export interface Styles {
  container: ViewStyle;
  titleText: TextStyle;
  smallTitleText: TextStyle;
  verySmallTitleText: TextStyle;
  cardStyle: ViewStyle;
  searchText: TextStyle;
  navigationContainer: ViewStyle;
  commonFlex: ViewStyle;
  dateText: ViewStyle;
  durationText: TextStyle;
  itemBottomView: ViewStyle;
  dottedLine: ViewStyle;
  airlineContainer: ViewStyle;
  flightDetailsContainer: ViewStyle;
  travelDottedLine: ViewStyle;
  travelLineContainer: ViewStyle;
  backArrow: ViewStyle;
  headerContainer: ViewStyle;
  greetingText: TextStyle;
  searchButton: ViewStyle;
  buttonText: TextStyle;
  infoTextContainer: ViewStyle;
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
  titleText: {
    ...appStyles.text,
    color: theme.colors.text,
    fontWeight: '700',
    fontSize: FontSize.XX_LARGE,
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
  smallTitleText: {
    ...appStyles.text,
    color: theme.colors.text,
    fontSize: FontSize.TINY,
  },
  verySmallTitleText: {
    ...appStyles.text,
    color: theme.colors.text,
    fontSize: FontSize.TINY,
  },
  cardStyle: {
    marginHorizontal: Spacing.SMALL,
    marginVertical: Spacing.XX_SMALL,
    borderRadius: Sizes.BorderRadius,
    margin: Spacing.SMALL,
    backgroundColor: theme.colors.tilesBackground,
    elevation: Spacing._3,
    shadowColor: theme.colors.black,
    shadowOpacity: 0.1,
    shadowOffset: {width: Spacing._0, height: Spacing._2},
    shadowRadius: Spacing._5,
    paddingBottom: Spacing.SMALL,
  },
  searchText: {
    textAlign: 'center',
    fontSize: FontSize.LARGE,
    fontWeight: '600',
    color: theme.colors.text,
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: Spacing.SMALL,
    marginVertical: Spacing.LARGE,
  },
  commonFlex: {
    flex: 1,
  },
  dateText: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  durationText: {
    backgroundColor: theme.colors.lightGrey,
    alignSelf: 'baseline',
    paddingHorizontal: Spacing._8,
    paddingVertical: Spacing._4,
    borderRadius: Sizes.BorderRadius,
  },
  itemBottomView: {
    flexDirection: 'row',
    marginHorizontal: Spacing.XX_SMALL,
    marginTop: Spacing.XXXX_SMALL,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dottedLine: {
    borderStyle: 'dotted',
    borderWidth: 0.5,
    borderColor: theme.colors.xLightGrey, // Use a transparent color for the border
    marginVertical: Spacing._6,
    marginHorizontal: Spacing._4,
  },
  airlineContainer: {
    backgroundColor: theme.colors.primary,
    alignSelf: 'baseline',
    alignItems: 'center',
    padding: Spacing._4,
    borderTopLeftRadius: Sizes.BorderRadius,
  },
  flightDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: Spacing.SMALL,
  },
  travelDottedLine: {
    borderStyle: 'dashed',
    borderWidth: 0.7,
    borderColor: theme.colors.primary,
    flex: 1,
    marginVertical: -Spacing.SMALL,
    transform: [{rotate: '90deg'}],
  },
  travelLineContainer: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backArrow: {
    borderWidth: 0.5,
    height: 40,
    width: 40,
    borderRadius: 20,
    borderColor: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    marginStart: Spacing.SMALL,
    alignItems: 'center',
  },
  searchButton: {
    marginTop: Spacing.SMALL,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    padding: Spacing.X_SMALL,
    alignSelf: 'stretch',
    borderRadius: Spacing._6,
    margin: Spacing.SMALL,
  },
  buttonText: {
    fontWeight: '600',
    color: theme.colors.white,
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
});

export default getStyles;
