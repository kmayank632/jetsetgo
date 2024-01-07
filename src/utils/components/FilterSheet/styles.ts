import {CustomTheme} from '../../../utils/theme/CustomTheme';
import {TextStyle, ViewStyle} from 'react-native';
import appStyles from '../../../utils/styles/styles';
import {FontSize, Spacing} from '../../../utils/values/dimens';

export interface Styles {
  container: ViewStyle;
  smallTitleText: TextStyle;
  headerContainer: ViewStyle;
  lineView: ViewStyle;
  searchButton: ViewStyle;
  buttonText: ViewStyle;
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
  smallTitleText: {
    ...appStyles.text,
    color: theme.colors.text,
    fontSize: FontSize.MEDIUM,
    fontWeight: '600',
  },
  headerContainer: {
    height: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 12,
  },
  lineView: {
    borderWidth: 0.5,
    borderColor: theme.colors.border,
    marginBottom: Spacing.SMALL,
  },
  searchButton: {
    marginTop: Spacing.LARGE,
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
});

export default getStyles;
