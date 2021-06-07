import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import * as Screens from '../pages';
import colors from '../styles/colors';

const ProductsNavigator = createStackNavigator({
  Products: Screens.Products,
  ProductDetail: Screens.ProductDetails,
  Cart: Screens.Cart,
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: colors.lightGreen,
    },
    headerTintColor: 'black',
    headerTitleStyle: {
      fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
      fontFamily: 'open-sans-bold'
    }
  }
})

export default createAppContainer(ProductsNavigator);