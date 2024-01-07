import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {CustomTheme} from '../../../utils/theme/CustomTheme';
import getStyles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {fetchFlights} from '../../../domain/middleware/api';
import {RootState} from '../../../domain/middleware/store';
import {FlightData} from '../../../domain/model/TripsIModel';
import AppCompatView from '../../../utils/components/AppCompatView';
import {FontSize, Spacing} from '../../../utils/values/dimens';
import moment from 'moment';
import Pressable from '../../../utils/components/Pressable';
import Icon from '../../../utils/components/Icon/Icon';
import {materialIcons} from '../../../assets/materialIcons';
import {NavigationScreen} from '../../navigation/navigationScreenMapping';
import FilterSortComponent from '../../../utils/components/FilterSheet';
import RBSheet from 'react-native-raw-bottom-sheet';

/**
 * Renders the Flights screen and displays a list of flight items.
 *
 * @param {Object} navigation - The navigation object used to navigate between screens.
 * @param {Object} route - The route object containing the parameters passed to the screen.
 * @return {JSX.Element} The Flights screen component.
 */
const Flights = ({navigation, route}: any) => {
  if (__DEV__) {
    console.log('RENDERED: Flights Screen');
  }

  // Get Styles
  const theme = useTheme() as CustomTheme;
  const styles = getStyles(theme);
  const [list, setList] = useState<FlightData[]>([]);
  const [dataList, setDataList] = useState<FlightData[]>([]);
  const filterSortRef = React.createRef<RBSheet>();

  const handleSort = (type: 'lowToHigh' | 'highToLow') => {
    console.log(type);

    const compareFare = (flightA: FlightData, flightB: FlightData) => {
      if (type === 'lowToHigh') {
        return flightA.fare - flightB.fare;
      } else {
        return flightB.fare - flightA.fare;
      }
    };

    // Sort the result array based on fare
    const flightData = [...dataList].sort(compareFare);
    setList(flightData);
  };

  const handleFilter = (selectedAirlines: string[]) => {
    // Assuming `list` is your original array of flight data
    const filteredList = dataList.filter(flight => {
      // Extract airline codes from the displayData.airlines array
      const flightAirlines = flight.displayData.airlines[0].airlineName;

      // Check if any selected airline is included in the flight's airlines
      return selectedAirlines.some(selectedAirline =>
        flightAirlines.includes(selectedAirline),
      );
    });
    setList(filteredList);
  };

  const openFilterSortSheet = () => {
    filterSortRef.current?.open();
  };

  // Destructure parameters from route.params
  const {fromCode, fromName, toCode, toName, date, noOfPassenger} =
    route.params;

  // Redux state and dispatch
  const dispatch = useDispatch();
  const flights = useSelector((state: RootState) => state.FLIGHTS);

  const loading = useSelector((state: RootState) => state.FLIGHTS.isLoader);

  // Fetch flights on component mount
  useEffect(() => {
    dispatch(fetchFlights() as any);
  }, [dispatch]);

  useEffect(() => {
    const sourceAirportCode = fromCode;
    const destinationAirportCode = toCode;

    // Check if flights and flights.data are truthy before filtering
    if (
      flights &&
      flights.data &&
      flights.data.data &&
      flights.data.data.result
    ) {
      // Filter data based on source, destination airport codes, and departure time
      const filteredResults = flights.data.data.result.filter(result => {
        const sourceCode = result.displayData.source.airport.airportCode;
        const destinationCode =
          result.displayData.destination.airport.airportCode;
        const depDate = result.displayData.source.depTime.split('T')[0]; // Extracting the date part

        return (
          sourceCode === sourceAirportCode &&
          destinationCode === destinationAirportCode &&
          depDate === date.split('T')[0]
        );
      });

      setList([...filteredResults]);
      setDataList([...filteredResults]);
    }
  }, [date, flights, fromCode, toCode]);

  // Footer for the FlatList
  const listFooter = () => <View style={{marginBottom: Spacing._40}} />;

  // Render individual flight item in the FlatList
  const renderFlightItem = ({item}: {item: FlightData}) => {
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

    // JSX structure for each flight item
    return (
      <Pressable
        style={styles.cardStyle}
        onPress={() =>
          navigation.navigate(NavigationScreen.summary, {
            item: item,
            passenger: noOfPassenger,
          })
        }>
        {/* Airline information */}
        <View style={styles.airlineContainer}>
          <Text style={[styles.smallTitleText, {color: theme.colors.white}]}>
            {airlineCode}
          </Text>
          <Text
            style={[styles.verySmallTitleText, {color: theme.colors.white}]}>
            {airlineName}
          </Text>
        </View>

        {/* Departure and arrival details */}
        <View style={styles.flightDetailsContainer}>
          {/* Departure details */}
          <View style={styles.commonFlex}>
            <Text style={{marginBottom: Spacing._8, color: theme.colors.text}}>
              {moment(depTime).format('LT')}
            </Text>
            <Text style={[styles.smallTitleText, {fontSize: FontSize.MEDIUM}]}>
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
            <Text style={{marginBottom: Spacing._8, color: theme.colors.text}}>
              {moment(arrTime).format('LT')}
            </Text>
            <Text style={[styles.smallTitleText, {fontSize: FontSize.MEDIUM}]}>
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
                style={[styles.smallTitleText, {color: theme.colors.black}]}>
                {moment(item.displayData.source.depTime).format('ll')}
              </Text>
            </View>
            {/* Flight duration */}
            <View style={[styles.durationText, {marginStart: Spacing._6}]}>
              <Text
                style={[styles.smallTitleText, {color: theme.colors.black}]}>
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
      </Pressable>
    );
  };

  // JSX for the main component
  return (
    <AppCompatView enableBottomSafeArea={false}>
      <View style={styles.container}>
        <View style={styles.centerFiterIcon}>
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
            <Text style={styles.greetingText}>Search Result</Text>
          </View>
          <Pressable onPress={openFilterSortSheet}>
            <Icon
              name={materialIcons.filterVariant}
              size={Spacing.LARGE}
              color={theme.colors.text}
            />
          </Pressable>
        </View>

        {/* Filter and Sort Component */}
        <FilterSortComponent
          ref={filterSortRef}
          onSort={handleSort}
          onFilter={handleFilter}
        />

        {/* Flight details and date */}
        <View style={styles.navigationContainer}>
          <View style={styles.commonFlex}>
            <Text style={styles.titleText}>{fromCode}</Text>
            <Text style={styles.smallTitleText}>{fromName}</Text>
          </View>
          <View style={styles.dateText}>
            <Text style={styles.verySmallTitleText}>
              {moment(date).format('ll')}
            </Text>
          </View>
          <View style={[styles.commonFlex, {alignItems: 'flex-end'}]}>
            <Text style={styles.titleText}>{toCode}</Text>
            <Text style={[styles.smallTitleText, {textAlign: 'right'}]}>
              {toName}
            </Text>
          </View>
        </View>

        {/* FlatList to display flights */}
        {list.length ? (
          <FlatList
            data={list}
            keyExtractor={item => item.id.toString()}
            renderItem={renderFlightItem}
            ListFooterComponent={listFooter}
          />
        ) : (
          <View style={{...styles.dateText, ...styles.commonFlex}}>
            <Text
              style={{
                ...styles.greetingText,
                color: theme.colors.primary,
                fontSize: FontSize.MEDIUM,
                marginBottom: Spacing.LARGE,
              }}>
              No Flight Found
            </Text>
            {!list.length && loading && (
              <ActivityIndicator size={'small'} color={theme.colors.primary} />
            )}
          </View>
        )}
      </View>
    </AppCompatView>
  );
};

export default Flights;
