import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import MealList from '../components/MealList';

import HeaderButton from '../components/HeaderButton';

const Favorites = (props) => {
  const favMeals = useSelector((state) => state.meals.favoriteMeals)

  if (favMeals.length === 0 || !favMeals)
    return (
      <View style={styles.fallback}>
        <Text>No Favorite Meals Found. Start adding some!</Text>
      </View>
    )

  return <MealList mealData={favMeals} nav={props.navigation} />
}

Favorites.navigationOptions = (navData) => {
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
    )
  }
}

export default Favorites;

const styles = StyleSheet.create({
  fallback: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})