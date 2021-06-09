import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons'

import * as Screens from '../pages';
import colors from '../styles/colors';

const defaultOptions = {
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

const ProductsNavigator = createStackNavigator({
  Products: Screens.Products,
  ProductDetail: Screens.ProductDetails,
  Cart: Screens.Cart,
}, { 
  defaultNavigationOptions: defaultOptions,
  navigationOptions: {
    drawerIcon: (config) => (
      <Ionicons 
        name="ios-cart" 
        size={23}
        color={config.tintColor}
      />
    )
  }
});

const OrdersNavigator = createStackNavigator({
  Orders: Screens.Orders,
}, { 
  defaultNavigationOptions: defaultOptions,
  navigationOptions: {
    drawerIcon: (config) => (
      <Ionicons 
        name="ios-list" 
        size={23}
        color={config.tintColor}
      />
    )
  }
});

const UserNavigator = createStackNavigator({
  UserProduct: Screens.UserProduct,
  EditProduct: Screens.EditProduct,
}, { 
  defaultNavigationOptions: defaultOptions,
  navigationOptions: {
    drawerIcon: (config) => (
      <Ionicons 
        name="ios-create" 
        size={23}
        color={config.tintColor}
      />
    )
  }
});

const ShopNavigator  = createDrawerNavigator({
  Products: ProductsNavigator,
  Orders: OrdersNavigator,
  User: UserNavigator,
}, {
  contentOptions: {
    activeTintColor: colors.lightGreen,
  }
})

export default createAppContainer(ShopNavigator);