import React from 'react';
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createDrawerNavigator } from'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '../styles'

import * as Screens from '../pages';
import { Platform } from 'react-native';

const defaultStackNavOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTintColor: colors.white,
    headerTitleStyle: {
        fontWeight: 'bold',
    },
  }
}

const MealsNavigator = createStackNavigator({
  Categories: Screens.Categories,
  CategoryMeals: Screens.CategoryMeals,
  MealDetails: Screens.MealDetails,
}, defaultStackNavOptions)

const FavoritesNavigator = createStackNavigator({
  Favorites: Screens.Favorites,
  MealDetails: Screens.MealDetails,
}, defaultStackNavOptions)

const tabScreenConfig = {
  Meals: { screen: MealsNavigator, navigationOptions: {
    tabBarIcon: (tabInfo) => {
      return (
        <Ionicons 
          name="ios-restaurant" 
          size={25} 
          color={tabInfo.tintColor} 
        />
      )
    } 
  }},
  Favorites: { screen: FavoritesNavigator, navigationOptions: {
    tabBarIcon: (tabInfo) => {
      return (
        <Ionicons 
          name="ios-star" 
          size={25} 
          color={tabInfo.tintColor} 
        />
      )
    } 
  }},
}

const MealsBottomTab = Platform.OS === 'android' ? 
  createMaterialBottomTabNavigator(tabScreenConfig, {
    activeColor: colors.secondary
}) : createBottomTabNavigator(tabScreenConfig, {
  tabBarOptions: {
    activeTintColor: colors.secondary
  }
});

const FiltersNavigator = createStackNavigator({
  Filters: Screens.Filters,
}, defaultStackNavOptions)

const mainNavigator = createDrawerNavigator({
  Favorites: MealsBottomTab,
  Filters: FiltersNavigator,
}, {
  contentOptions: {
    activeTintColor: colors.secondary
  }
});

export default createAppContainer(mainNavigator);