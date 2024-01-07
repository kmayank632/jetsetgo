import React, {useState} from 'react';
import {Alert, FlatList, Text, TextInput, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {CustomTheme} from '../../../utils/theme/CustomTheme';
import getStyles from './styles';
import AppCompatView from '../../../utils/components/AppCompatView';
import {Spacing} from '../../../utils/values/dimens';
import indianAirports from './list';
import Pressable from '../../../utils/components/Pressable';
import Icon from '../../../utils/components/Icon/Icon';
import {materialIcons} from '../../../assets/materialIcons';
import {NavigationScreen} from '../../navigation/navigationScreenMapping';

const SelectCity = React.memo(({navigation, route}: any) => {
  if (__DEV__) {
    console.log('RENDERED: Select City Screen');
  }

  // Get the current theme
  const theme = useTheme() as CustomTheme;

  // Get the styles based on the theme
  const styles = getStyles(theme);
  const [searchTerm, setSearchTerm] = useState('');
  const [list, setList] = useState(indianAirports);
  const {type, from, to} = route.params;

  const handleSearch = (val: string) => {
    setSearchTerm(val);
    const filteredList = indianAirports.filter(item =>
      item.name.toLowerCase().includes(val.toLowerCase()),
    );
    setList(filteredList);
  };

  // Footer for the FlatList
  const listFooter = () => <View style={{marginBottom: Spacing._40}} />;

  const renderItem = ({item, index}: {item: any; index: number}) => {
    return (
      <Pressable
        onPress={() => {
          if (type === 'Arrival' && from === item.code) {
            Alert.alert('', 'Selected destination same as source');
            return;
          }
          if (type === 'Departure' && to === item.code) {
            Alert.alert('', 'Selected Source same as destination');
            return;
          }
          navigation.navigate(NavigationScreen.home, {
            code: item.code,
            name: item.name,
            type: type,
          });
        }}
        style={{marginHorizontal: Spacing.SMALL, paddingTop: Spacing.SMALL}}
        key={index}>
        <View style={styles.itemContainer}>
          <View style={{flex: Spacing._1, marginEnd: Spacing.SMALL}}>
            <Text style={styles.verySmallTitleText}>{item.city}</Text>
            <Text style={styles.smallTitleText}>{item.name}</Text>
          </View>
          <Text>{item.code}</Text>
        </View>

        <View style={styles.lineView} />
      </Pressable>
    );
  };

  return (
    <AppCompatView enableBottomSafeArea={false}>
      <View style={styles.container}>
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
          <Text style={styles.greetingText}>Select {type}</Text>
        </View>

        <TextInput
          style={styles.searchInput}
          placeholder="Search by airport name"
          value={searchTerm}
          onChangeText={text => handleSearch(text)}
        />
        {/* FlatList to display flights */}
        <FlatList
          data={list}
          keyExtractor={item => item.code.toString()}
          renderItem={renderItem}
          ListFooterComponent={listFooter}
        />
      </View>
    </AppCompatView>
  );
});

export default SelectCity;
