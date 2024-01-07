// FilterSortComponent.tsx
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import getStyles from './styles';
import {CustomTheme} from '../../theme/CustomTheme';
import {useTheme} from '@react-navigation/native';
import Pressable from '../Pressable';
import Icon from '../Icon/Icon';
import {materialIcons} from '../../../assets/materialIcons';
import {Spacing} from '../../values/dimens';
import DropDownPicker from 'react-native-dropdown-picker';

interface FilterSortProps {
  onFilter: ([]) => void;
  onSort: (sortType: 'lowToHigh' | 'highToLow') => void;
}

const FilterSortComponent = React.forwardRef<RBSheet, FilterSortProps>(
  ({onSort, onFilter}, ref) => {
    const handleSort = (type: 'lowToHigh' | 'highToLow') => {
      onSort(type);
      closeBottomSheet();
    };

    const handleFilter = () => {
      onFilter(selectedValues);
    };

    const theme = useTheme() as CustomTheme;
    const styles = getStyles(theme);
    const [items, setItems] = useState([
      {label: 'Air India', value: 'Air India'},
      {label: 'JetSpice', value: 'JetSpice'},
    ]);
    const [selectedValues, setSelectedValues] = useState([]);
    const [open, setOpen] = useState(false);

    const closeBottomSheet = () => {
      if (ref && 'current' in ref && ref.current) {
        ref.current.close();
      }
    };

    return (
      <RBSheet ref={ref} height={500} duration={250}>
        <View>
          <View style={styles.headerContainer}>
            <Text style={styles.smallTitleText}>Sort & Filter</Text>
            <Pressable onPress={closeBottomSheet}>
              <Icon
                name={materialIcons.close}
                size={Spacing.LARGE}
                color={theme.colors.text}
              />
            </Pressable>
          </View>
          <View style={styles.lineView} />

          <Text style={[styles.smallTitleText, {margin: Spacing._16}]}>
            Sort
          </Text>

          <View style={{marginHorizontal: Spacing._16}}>
            <Pressable
              onPress={() => {
                closeBottomSheet();
                handleSort('lowToHigh');
              }}>
              <Text style={{padding: 6}}>Price Low to High</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                closeBottomSheet();
                handleSort('highToLow');
              }}
              style={{marginTop: Spacing._16}}>
              <Text style={{padding: 6}}>Price High to Low</Text>
            </Pressable>
          </View>

          <Text style={[styles.smallTitleText, {margin: Spacing._16}]}>
            Filter
          </Text>
          <DropDownPicker
            open={open}
            value={selectedValues}
            setOpen={setOpen}
            setValue={setSelectedValues}
            setItems={setItems}
            placeholder={'Choose airline'}
            items={items}
            multiple={true}
            containerStyle={{
              height: 40,
              marginHorizontal: 16,
              marginTop: 16,
              width: '90%',
            }}
          />
          <View>
            <Pressable
              onPress={() => {
                closeBottomSheet();
                handleFilter();
              }}
              style={styles.searchButton}>
              <Text style={styles.buttonText}>Apply Filter</Text>
            </Pressable>
          </View>
        </View>
      </RBSheet>
    );
  },
);

export default FilterSortComponent;
