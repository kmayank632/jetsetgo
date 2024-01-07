import React, {useState} from 'react';
import {Alert, FlatList, Text, TextInput, View} from 'react-native';
import {CommonActions, useTheme} from '@react-navigation/native';
import {CustomTheme} from '../../../utils/theme/CustomTheme';
import getStyles from './styles';
import moment from 'moment';
import {FontSize, Spacing} from '../../../utils/values/dimens';
import Pressable from '../../../utils/components/Pressable';
import AppCompatView from '../../../utils/components/AppCompatView';
import Icon from '../../../utils/components/Icon/Icon';
import {materialIcons} from '../../../assets/materialIcons';
import {ScrollView} from 'react-native-gesture-handler';
import {NavigationScreen} from '../../navigation/navigationScreenMapping';

// Define the Customer type
type Customer = {
  name: string;
  age: string;
};

const Summary = React.memo(({navigation, route}: any) => {
  if (__DEV__) {
    console.log('RENDERED: Summary Screen');
  }

  // Get Styles
  const theme = useTheme() as CustomTheme;
  const styles = getStyles(theme);
  const {item, passenger} = route.params;

  const [customerDetails, setCustomerDetails] = useState<Customer[]>([]);

  const handleInputChange = (value: any, index: any, field: any) => {
    setCustomerDetails(prevDetails => {
      const updatedDetails = [...prevDetails];
      updatedDetails[index] = {...updatedDetails[index], [field]: value};
      return updatedDetails;
    });
  };

  const handleResetNavigation = () => {
    // Reset navigation stack
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: NavigationScreen.home,
          },
        ],
      }),
    );
  };

  const bookingSuccessfully = () => {
    if (customerDetails.length !== passenger) {
      Alert.alert('', 'Please fill in all customer details');
      return;
    }

    // Assuming all details should have non-empty values
    const areAllDetailsFilled = customerDetails.every(
      details =>
        details.name !== undefined &&
        details.name !== '' &&
        details.age !== undefined &&
        details.age !== '',
    );

    if (areAllDetailsFilled) {
      // Proceed with form submission or any other action
      Alert.alert('', 'Booking Successfully', [
        {text: 'OK', onPress: () => handleResetNavigation()},
      ]);
    } else {
      // Throw an error alert
      Alert.alert('', 'Please fill in all customer details');
    }
  };

  // Destructure data from the item
  const {displayData, fare} = item;
  const {airlines, source, destination} = displayData;
  const {airlineCode, airlineName} = airlines[0];
  const {depTime} = source;
  const {arrTime} = destination;
  const {airportCode: sourceAirportCode, airportName: sourceAirportName} =
    source.airport;
  const {
    airportCode: destinationAirportCode,
    airportName: destinationAirportName,
  } = destination.airport;

  const generateForm = () => {
    const forms = [];

    for (let i = 0; i < passenger; i++) {
      forms.push(
        <View key={i} style={{marginHorizontal: 15}}>
          <Text
            style={{
              ...styles.smallTitleText,
              fontSize: 16,
              marginVertical: 15,
            }}>
            Passenger {i + 1}
          </Text>
          <Text style={{...styles.smallTitleText, fontSize: 14}}>
            Full Name
          </Text>
          <TextInput
            style={styles.infoTextContainer}
            placeholder="Enter full name"
            onChangeText={name => handleInputChange(name, i, 'name')}
          />

          <Text style={{...styles.smallTitleText, fontSize: 14, marginTop: 12}}>
            Age
          </Text>
          <TextInput
            style={styles.infoTextContainer}
            placeholder="Enter age"
            onChangeText={age => handleInputChange(age, i, 'age')}
            keyboardType="numeric"
          />
        </View>,
      );
    }

    return forms;
  };

  return (
    <AppCompatView enableBottomSafeArea={false}>
      <View style={styles.container}>
        {/* Search result header */}
        <View style={styles.headerContainer}>
          <Pressable
            style={styles.backArrow}
            onPress={() => navigation.goBack()}>
            <Icon
              name={materialIcons.chevronLeft}
              size={Spacing.LARGE}
              color={theme.colors.white}
            />
          </Pressable>
          <Text style={styles.greetingText}>Summary</Text>
        </View>
        <ScrollView>
          <View style={styles.cardStyle}>
            {/* Airline information */}
            <View style={styles.airlineContainer}>
              <Text
                style={[styles.smallTitleText, {color: theme.colors.white}]}>
                {airlineCode}
              </Text>
              <Text
                style={[
                  styles.verySmallTitleText,
                  {color: theme.colors.white},
                ]}>
                {airlineName}
              </Text>
            </View>

            {/* Departure and arrival details */}
            <View style={styles.flightDetailsContainer}>
              {/* Departure details */}
              <View style={styles.commonFlex}>
                <Text
                  style={{marginBottom: Spacing._8, color: theme.colors.text}}>
                  {moment(depTime).format('LT')}
                </Text>
                <Text
                  style={[styles.smallTitleText, {fontSize: FontSize.MEDIUM}]}>
                  {sourceAirportCode}
                </Text>
                <Text style={styles.smallTitleText}>{sourceAirportName}</Text>
              </View>

              {/* Travel line */}
              <View style={styles.travelLineContainer}>
                <View style={styles.travelDottedLine} />
                <Text style={{marginTop: -Spacing.LARGE}}>
                  {item.displayData.stopInfo}
                </Text>
              </View>

              {/* Arrival details */}
              <View style={{...styles.commonFlex, alignItems: 'flex-end'}}>
                <Text
                  style={{marginBottom: Spacing._8, color: theme.colors.text}}>
                  {moment(arrTime).format('LT')}
                </Text>
                <Text
                  style={[styles.smallTitleText, {fontSize: FontSize.MEDIUM}]}>
                  {destinationAirportCode}
                </Text>
                <Text style={[styles.smallTitleText, {textAlign: 'right'}]}>
                  {destinationAirportName}
                </Text>
              </View>
            </View>

            {/* Dotted line separator */}
            <View style={styles.dottedLine} />

            {/* Bottom view with additional details */}
            <View style={styles.itemBottomView}>
              <View style={{flexDirection: 'row'}}>
                {/* Flight date */}
                <View style={styles.durationText}>
                  <Text
                    style={[
                      styles.smallTitleText,
                      {color: theme.colors.black},
                    ]}>
                    {moment(item.displayData.source.depTime).format('ll')}
                  </Text>
                </View>
                {/* Flight duration */}
                <View style={[styles.durationText, {marginStart: Spacing._6}]}>
                  <Text
                    style={[
                      styles.smallTitleText,
                      {color: theme.colors.black},
                    ]}>
                    {item.displayData.totalDuration}
                  </Text>
                </View>
              </View>
              {/* Flight fare */}
              <Text style={styles.titleText}>
                ₹{fare}
                <Text style={styles.verySmallTitleText}>+ Tax</Text>
              </Text>
            </View>
          </View>

          <Text style={{...styles.greetingText, marginBottom: -Spacing._8}}>
            Passenger Details
          </Text>

          <View>{generateForm()}</View>
          <Text
            style={{
              ...styles.smallTitleText,
              fontSize: FontSize.MEDIUM,
              margin: Spacing.SMALL,
              marginBottom: Spacing._0,
            }}>
            Customer Details:
          </Text>
          <FlatList
            data={customerDetails}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
              <View
                key={index}
                style={{...styles.cardStyle, padding: Spacing._8}}>
                <Text
                  style={{
                    ...styles.smallTitleText,
                    marginBottom: Spacing._0,
                    fontSize: FontSize.NORMAL,
                  }}>
                  Name: {item.name}
                </Text>
                <Text
                  style={{
                    ...styles.smallTitleText,
                    marginBottom: Spacing._0,
                    fontSize: FontSize.SMALL,
                    marginTop: Spacing.XX_SMALL,
                  }}>
                  Age: {item.age}
                </Text>
              </View>
            )}
          />

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.greetingText}>Total Amount</Text>
            <Text style={[styles.greetingText, {marginEnd: Spacing.SMALL}]}>
              ₹{passenger * fare}
            </Text>
          </View>
        </ScrollView>
      </View>
      <View>
        <Pressable onPress={bookingSuccessfully} style={styles.searchButton}>
          <Text style={styles.buttonText}>Book Now</Text>
        </Pressable>
      </View>
    </AppCompatView>
  );
});

export default Summary;
