import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {CustomTheme} from '../../../utils/theme/CustomTheme';
import getStyles from './styles';
import {drawable} from '../../../utils/values/drawable';
import {NavigationScreen} from '../../navigation/navigationScreenMapping';

const Splash = React.memo(({navigation}: any) => {
  if (__DEV__) {
    console.log('RENDERED: Splash Screen');
  }

  // Get Styles
  const theme = useTheme() as CustomTheme;
  const styles = getStyles(theme);

  useEffect(() => {
    // Hide splash screen after 3 seconds
    const splashTimer = setTimeout(() => {
      // Navigate to home
      navigation.replace(NavigationScreen.home);
    }, 3000);

    // Clear the timer if the component unmounts
    return () => clearTimeout(splashTimer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={drawable.logo} resizeMode="center" />
    </View>
  );
});

export default Splash;
