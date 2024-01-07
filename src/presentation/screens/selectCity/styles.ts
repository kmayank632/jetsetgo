import {CustomTheme} from '../../../utils/theme/CustomTheme';
import {TextStyle, ViewStyle} from 'react-native';
import appStyles from '../../../utils/styles/styles';
import {FontSize, Spacing} from '../../../utils/values/dimens';
import {FontFamily} from '../../../utils/styles/fonts';

export interface Styles {
  container: ViewStyle;
  searchInput: ViewStyle;
  greetingText: TextStyle;
  smallTitleText: TextStyle;
  verySmallTitleText: TextStyle;
  lineView: ViewStyle;
  itemContainer: ViewStyle;
  backArrow: ViewStyle;
  headerContainer: ViewStyle;
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
  searchInput: {
    borderColor: theme.colors.border,
    borderWidth: 1,
    marginHorizontal: 15,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
    marginVertical: 12,
  },
  smallTitleText: {
    ...appStyles.text,
    color: theme.colors.text,
    fontSize: FontSize.TINY,
    marginTop: Spacing.XXX_SMALL,
  },
  verySmallTitleText: {
    ...appStyles.text,
    color: theme.colors.text,
    fontSize: FontSize.NORMAL,
  },
  lineView: {
    borderWidth: 0.5,
    borderColor: theme.colors.border,
    marginTop: Spacing.SMALL,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
});

export default getStyles;
