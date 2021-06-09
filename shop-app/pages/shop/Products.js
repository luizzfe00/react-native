import React from 'react'
import { StyleSheet, FlatList, Platform, Button } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import colors from '../../styles/colors';
import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cart';
import HeaderButton from '../../components/UI/HeaderButton';

const Products = (props) => {
  const products = useSelector((state) => state.products.availableProducts);
  const dispatch = useDispatch();

  const selectHandler = (product) => {
    props.navigation.navigate('ProductDetail', {
      product: product,
    })
  }

  return (
    <FlatList 
      data={products} 
      renderItem={(data) => (
        <ProductItem 
          product={data.item} 
          onSelect={() => selectHandler(data.item)}
        >
          <Button 
            title="View Details" 
            onPress={() => selectHandler(data.item)} 
            color={colors.primary}
          />
          <Button 
            title="To Cart" 
            onPress={() => dispatch(cartActions.addToCart(data.item))} 
            color={colors.lightGreen}
          />
        </ProductItem>
      )}
    />
  )
}

Products.navigationOptions = (navData) => {

  return {
    headerTitle: 'All Products',
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Cart"
          iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
          onPress={() => navData.navigation.navigate('Cart')}
        />
      </HeaderButtons>
    ),
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
          onPress={() => 
            navData.navigation.toggleDrawer()
          } 
        />
      </HeaderButtons>
    )
  }
}

export default Products

const styles = StyleSheet.create({})
