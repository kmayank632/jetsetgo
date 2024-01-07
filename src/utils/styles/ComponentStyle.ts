import {ViewStyle} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import {ColorValue} from 'react-native/Libraries/StyleSheet/StyleSheet';

/**
 * Custom Style
 *
 * Add custom fields according to use case
 *
 * @see https://reactnative.dev/docs/view#style
 */
export interface ComponentStyle extends ViewStyle {
  color?: string | ColorValue | undefined;
  size?: number | undefined;
}
