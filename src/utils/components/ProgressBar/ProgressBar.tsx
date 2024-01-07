import React from 'react';
import {
  MaterialIndicator,
  MaterialIndicatorProps,
} from 'react-native-indicators';
import {useTheme} from '@react-navigation/native';
import {CustomTheme} from '../../theme/CustomTheme';
import getStyles from './styles';
import {View} from 'react-native';

/**
 * A reusable progress bar component that can be used across the application.
 * @param color - Color of the Component
 * @param size - Size of the Component
 * @param animating - Animation toggle
 */
export interface Props extends MaterialIndicatorProps {}

const ProgressBar: React.FC<Props> = ({color, size, animating}) => {
  // Get Styles
  const theme = useTheme() as CustomTheme;
  const styles = getStyles(theme);

  return (
    <View
      style={{
        ...styles.progressBarIndicatorView,
        height: size ?? styles.progressBarIndicatorView.height,
        width: size ?? styles.progressBarIndicatorView.width,
      }}>
      <MaterialIndicator
        animating={animating ?? true}
        color={String(color ?? styles.progressBar.color)}
        size={size ?? styles.progressBar.size}
      />
    </View>
  );
};

export default ProgressBar;
