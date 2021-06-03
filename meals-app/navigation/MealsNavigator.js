import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';

import { colors } from '../styles'

import * as Screens from '../pages';

const MealsNavigator = createStackNavigator({
  Categories: Screens.Categories,
  CategoryMeals: Screens.CategoryMeals,
  MealDetails: Screens.MealDetails,
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTintColor: colors.white,
    headerTitleStyle: {
        fontWeight: 'bold',
    },
  }
})

export default createAppContainer(MealsNavigator);