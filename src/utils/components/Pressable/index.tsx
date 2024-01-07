import React from 'react';
import Ripple, {RippleProps} from 'react-native-material-ripple';
import {ComponentStyle} from '../../styles/ComponentStyle';
import {StyleProp} from 'react-native';

/**
 * Props for the Touchable component.
 */
export interface PressableProps extends RippleProps {
  onPress?: () => void; // Function to be called when the touchable is pressed.
  children?: React.ReactNode; // The content to be rendered inside the touchable.
  style?: StyleProp<ComponentStyle>; // Any Extra Properties for Component
}

/**
 * A cross-platform Touchable component that uses TouchableNativeFeedback on Android and TouchableOpacity on iOS.
 */
const Pressable: React.FC<PressableProps> = ({
  onPress,
  children,
  style,
  ...props
}) => {
  // Timer ID
  var timerId: NodeJS.Timeout | null = null;

  return (
    <Ripple
      onPress={() => {
        if (props.disabled) {
          return;
        }

        // Cancel Previous Timer
        if (timerId) {
          clearTimeout(timerId);
        }

        // Initialize Timer
        timerId = setTimeout(() => {
          onPress?.();
        }, 200);
      }}
      {...props}
      rippleDuration={props.rippleDuration ?? 300}
      rippleCentered={props.rippleCentered ?? true}
      style={{overflow: 'hidden', ...style}}>
      {children}
    </Ripple>
  );
};

export default Pressable;
