import {StackNavigationOptions, TransitionSpecs} from '@react-navigation/stack';

const SlideLeftRightTransition: StackNavigationOptions = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  /**
   * Interpolates the style of the card during a transition animation.
   * @param current - The current screen being transitioned.
   * @param next - The next screen that will appear after the transition.
   * @param layouts - The layout information of the screens.
   * @returns The interpolated card style.
   */
  cardStyleInterpolator: ({current, next, layouts}: any) => {
    // Interpolate the X translation based on the progress of the current screen
    const translateX = current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [layouts.screen.width, 0],
    });

    // Keep the opacity at 1 throughout the animation
    const opacity = current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 1],
    });

    let transform = [{translateX}, {scale: 1}];

    // If there is a next screen, interpolate the X translation based on its progress
    if (next) {
      transform = [
        {
          translateX: next.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -layouts.screen.width],
          }),
        },
        {scale: 1},
      ];
    }

    // Return the interpolated card style
    return {
      cardStyle: {
        opacity,
        transform,
      },
    };
  },
};

export default SlideLeftRightTransition;
