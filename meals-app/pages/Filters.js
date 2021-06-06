import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import FilterSwitch from '../components/FilterSwitch';
import { setFilters as setFiltersAction } from '../store/actions/mealsAction';

const initialState = {
  glutenFree: false,
  lactoseFree: false,
  vegan: false,
  vegeterian: false,
}

const Filters = (props) => {
  const dispatch = useDispatch();
  const { navigation } = props;

  const [filters, setFilters] = useState(initialState)

  const saveFilters = useCallback(() => {
    const appliedFilters = { ...filters };
    dispatch(setFiltersAction(appliedFilters));
  }, [filters, dispatch])

  useEffect(() => {
    navigation.setParams({ filters: saveFilters });
  }, [saveFilters])

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Filters</Text>
      <FilterSwitch 
        label="Gluten-free" 
        value={filters.glutenFree} 
        onValueChange={
          (value) => setFilters({ ...filters, glutenFree: value })
        } 
      />
      <FilterSwitch 
        label="Lactose-free" 
        value={filters.lactoseFree} 
        onValueChange={
          (value) => setFilters({ ...filters, lactoseFree: value })
        } 
      />
      <FilterSwitch 
        label="Vegan" 
        value={filters.vegan} 
        onValueChange={
          (value) => setFilters({ ...filters, vegan: value })
        } 
      />
      <FilterSwitch 
        label="Vegeterian" 
        value={filters.vegeterian} 
        onValueChange={
          (value) => setFilters({ ...filters, vegeterian: value })
        } 
      />
    </View>
  )
}

Filters.navigationOptions = (navData) => {
  return {
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item 
          title="Menu" 
          iconName="ios-menu" 
          onPress={() => {
            navData.navigation.toggleDrawer();
          }} 
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item 
          title="Save" 
          iconName="ios-save" 
          onPress={navData.navigation.getParam('filters')} 
        />
      </HeaderButtons>
    )
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center',
  }
});

export default Filters;