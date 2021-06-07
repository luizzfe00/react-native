import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import * as Screens from '../pages';
import colors from '../styles/colors';

const ProductsNavigator = createStackNavigator({
  Products: Screens.Products,
  ProductDetail: Screens.ProductDetails,
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: colors.lightGreen,
    },
    headerTintColor: 'black'
  }
})

export default createAppContainer(ProductsNavigator);