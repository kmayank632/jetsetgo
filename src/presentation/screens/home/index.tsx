import React, {useState} from 'react';
import {Alert, Image, Text, View} from 'react-native';
import {useFocusEffect, useTheme} from '@react-navigation/native';
import {CustomTheme} from '../../../utils/theme/CustomTheme';
import getStyles from './styles';
import {FontSize, Spacing} from '../../../utils/values/dimens';
import Pressable from '../../../utils/components/Pressable';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import AppCompatView from '../../../utils/components/AppCompatView';
import Icon from '../../../utils/components/Icon/Icon';
import {materialIcons} from '../../../assets/materialIcons';
import {NavigationScreen} from '../../navigation/navigationScreenMapping';
import moment from 'moment';
import {drawable} from '../../../utils/values/drawable';

const Home = React.memo(({navigation, route}: any) => {
  if (__DEV__) {
    console.log('RENDERED: Home Screen');
  }
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectDepartureCode, setSelectDepartureCode] = useState<string>();
  const [selectDepartureName, setSelectDepartureName] = useState<string>();
  const [selectArrivalCode, setSelectArrivalCode] = useState<string>();
  const [selectArrivalName, setSelectArrivalName] = useState<string>();
  const [passenger, setPassenger] = useState<number>(1);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      // Check if the route and route params are available
      if (route && route.params) {
        const {type, code, name} = route.params;
        // Check the type of the route params
        if (type === 'Arrival') {
          // Set the arrival code and name
          setSelectArrivalCode(code);
          setSelectArrivalName(name);
        } else {
          // Set the departure code and name
          setSelectDepartureCode(code);
          setSelectDepartureName(name);
        }
      }
    }, [route]),
  );

  // Get the current theme
  const theme = useTheme() as CustomTheme;

  // Get the styles based on the theme
  const styles = getStyles(theme);

  /**
   * Executes when the user clicks on the search flight button.
   * Validates the selected date, departure code, and arrival code.
   * If any of the fields are not selected, displays an alert asking the user to select all the fields.
   * If all fields are selected, navigates to the flights screen with the selected departure and arrival information.
   *
   * @return {void}
   */
  const searchFlightClick = () => {
    if (!selectedDate || !selectDepartureCode || !selectArrivalCode) {
      Alert.alert('', 'Please select all the fields');
      return;
    }
    navigation.navigate(NavigationScreen.flights, {
      fromCode: selectDepartureCode,
      fromName: selectDepartureName,
      toCode: selectArrivalCode,
      toName: selectArrivalName,
      date: moment(selectedDate).format(),
      noOfPassenger: passenger,
    });
  };

  /**
   * Shows the date picker.
   *
   * @param {void}
   * @return {void}
   */
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  /**
   * Hides the date picker.
   *
   * @return {void}
   */
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  /**
   * Handles the confirmation of a date selection.
   *
   * @param {Date} date - The selected date.
   * @return {void} This function does not return anything.
   */
  const handleConfirm = (date: Date) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  /**
   * Handles the increment of the passenger count.
   *
   * @return {void} No return value.
   */
  const handleIncrement = () => {
    if (passenger < 5) {
      setPassenger(passenger + 1);
    } else {
      Alert.alert('', 'Cannot exceed 5');
    }
  };

  /**
   * Handles the decrement operation for the passenger count.
   *
   * @param {void}
   * @return {void}
   */
  const handleDecrement = () => {
    if (passenger > 1) {
      setPassenger(prevPassenger => prevPassenger - 1);
    } else {
      Alert.alert('', 'Cannot be less than 1');
    }
  };

  return (
    <AppCompatView enableBottomSafeArea={false}>
      <View style={styles.imageContainer}>
        <Image
          style={{height: 80, width: 80}}
          source={drawable.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.container}>
        <Text
          style={[
            styles.greetingText,
            {marginBottom: Spacing._0, fontSize: FontSize.NORMAL},
          ]}>
          Are you Planning to Fly?
        </Text>
        <Text style={[styles.greetingText]}>Buy Your Ticket Here!</Text>

        <View style={styles.infoContainer}>
          {/* Flight Date */}
          <Text style={[styles.titleText, {marginTop: Spacing.XXXX_SMALL}]}>
            Flight Date<Text style={{color: theme.colors.red}}>*</Text>
          </Text>

          {/* Pressable component for flight date */}
          <Pressable
            onPress={() => showDatePicker()}
            style={styles.infoTextContainer}>
            <Text
              style={[
                styles.infoText,
                {
                  color: !selectedDate
                    ? theme.colors.textHint
                    : theme.colors.black,
                },
              ]}>
              {selectedDate?.toDateString() ?? 'Select Date'}
            </Text>
            <Icon
              name={materialIcons.calendar}
              size={Spacing.NORMAL}
              color={theme.colors.primary}
            />
          </Pressable>

          <View style={styles.rowContainer}>
            <View style={[styles.commonFlex, {marginEnd: Spacing._6}]}>
              {/* Departure */}
              <Text style={styles.titleText}>
                Departure<Text style={{color: theme.colors.red}}>*</Text>
              </Text>

              {/* Pressable component for departure */}
              <Pressable
                onPress={() => {
                  navigation.navigate(NavigationScreen.selectCity, {
                    type: 'Departure',
                    from: selectDepartureCode,
                    to: selectArrivalCode,
                  });
                }}
                style={styles.infoTextContainer}>
                <Text
                  style={[
                    styles.infoText,
                    {
                      color: !selectDepartureCode
                        ? theme.colors.textHint
                        : theme.colors.black,
                    },
                  ]}>
                  {!selectDepartureCode ? 'Select' : selectDepartureCode}
                </Text>
                <Icon
                  name={materialIcons.chevronRight}
                  color={theme.colors.primary}
                />
              </Pressable>
            </View>

            <View style={[styles.commonFlex, {marginStart: Spacing._6}]}>
              {/* Arrival */}
              <Text style={styles.titleText}>
                Arrival<Text style={{color: theme.colors.red}}>*</Text>
              </Text>

              {/* Pressable component for arrival */}
              <Pressable
                onPress={() => {
                  navigation.navigate(NavigationScreen.selectCity, {
                    type: 'Arrival',
                    from: selectDepartureCode,
                    to: selectArrivalCode,
                  });
                }}
                style={styles.infoTextContainer}>
                <Text
                  style={[
                    styles.infoText,
                    {
                      color: !selectDepartureCode
                        ? theme.colors.textHint
                        : theme.colors.black,
                    },
                  ]}>
                  {!selectArrivalCode ? 'Select' : selectArrivalCode}
                </Text>
                <Icon
                  name={materialIcons.chevronRight}
                  color={theme.colors.primary}
                />
              </Pressable>
            </View>
          </View>

          {/* Flight Date */}
          <Text style={[styles.titleText, {marginTop: Spacing.SMALL}]}>
            Select Passenger
          </Text>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {/* Pressable component for flight date */}
            <Pressable
              onPress={() => showDatePicker()}
              style={styles.infoTextContainer}>
              <Text style={styles.infoText}>{passenger}</Text>
            </Pressable>

            <View style={styles.signContainer}>
              <Pressable onPress={handleDecrement} style={styles.signView}>
                <Text style={styles.signText}>-</Text>
              </Pressable>
              <Pressable onPress={handleIncrement} style={styles.signView}>
                <Text style={styles.signText}>+</Text>
              </Pressable>
            </View>
          </View>
          {/* Pressable component for search flight */}
          <Pressable onPress={searchFlightClick} style={styles.searchButton}>
            <Text style={styles.buttonText}>Search Flight</Text>
          </Pressable>
        </View>
        {isDatePickerVisible && (
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        )}
      </View>
    </AppCompatView>
  );
});

export default Home;
