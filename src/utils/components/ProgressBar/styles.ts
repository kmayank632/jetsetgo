import {StyleSheet, ViewStyle} from 'react-native';
import {CustomTheme} from '../../theme/CustomTheme';
import {ComponentStyle} from '../../styles/ComponentStyle';
import {Sizes} from '../../values/dimens';

/**
 * Styles Parameters
 * */
export interface Styles {
  progressBar: ComponentStyle;
  progressBarIndicatorView: ViewStyle;
}

/**
 * Returns the styles for Icon component
 * @param {CustomTheme} theme - The current theme object
 * @return {Styles} - The object containing the styles for the component
 */
const getStyles = (theme: CustomTheme): Styles =>
  StyleSheet.create({
    progressBar: {
      color: theme.colors.primary,
      size: Sizes.ProgressBarSize,
    },
    progressBarIndicatorView: {
      justifyContent: 'center',
      alignItems: 'center',
      height: Sizes.ProgressBarSize,
      width: Sizes.ProgressBarSize,
    },
  });

export default getStyles;
