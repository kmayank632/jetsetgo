import {CustomTheme} from '../../theme/CustomTheme';
import {StyleSheet, TextStyle} from 'react-native';
import {Spacing} from '../../values/dimens';

export interface Styles {
  icon: TextStyle;
}

/**
 * Returns the styles for Icon component
 * @param {CustomTheme} theme - The current theme object
 * @return {Styles} - The object containing the styles for the component
 *
 */
const getStyles = (theme: CustomTheme): Styles =>
  StyleSheet.create({
    icon: {
      color: theme.colors.drawable,
      fontSize: Spacing.MEDIUM,
    },
  });

export default getStyles;
