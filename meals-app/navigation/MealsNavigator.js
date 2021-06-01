import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';

import * as Screens from '../pages';

const MealsNavigator = createStackNavigator({
  Categorias: Screens.Categories,
  Pratos: Screens.CategoryMeals,
  Detalhes: Screens.MealDetails,
})

export default createAppContainer(MealsNavigator);