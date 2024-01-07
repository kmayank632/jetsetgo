import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {CustomTheme} from '../../theme/CustomTheme';
import {FontFamily} from '../../styles/fonts';
import appStyles from '../../styles/styles';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Spacing} from '../../values/dimens';

/**
 * Styles Parameters
 * */
export interface Styles {
  container: ViewStyle;
  loadingTitleStyle: TextStyle;
}

/**
 * Returns the styles for Icon component
 * @param {CustomTheme} theme - The current theme object
 * @return {Styles} - The object containing the styles for the component
 */
const getStyles = (theme: CustomTheme): Styles =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      backgroundColor: theme.colors.loadingBackground,
      height: '100%',
      width: '100%',
      position: 'absolute',
      zIndex: 9999,
    },
    loadingTitleStyle: {
      ...appStyles.text,
      fontFamily: FontFamily.SEMI_BOLD,
      color: Colors.white,
      marginTop: Spacing.X_SMALL,
    },
  });

export default getStyles;
