import React from 'react'
import { StyleSheet, FlatList, Platform } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cart';
import HeaderButton from '../../components/UI/HeaderButton';

const Products = (props) => {
  const products = useSelector((state) => state.products.availableProducts);
  const dispatch = useDispatch();

  return (
    <FlatList 
      data={products} 
      renderItem={(data) => (
        <ProductItem 
          product={data.item} 
          onViewDetail={() => {
            props.navigation.navigate('ProductDetail', {
              product: data.item,
            })
          }}
          onAddToCart={() => dispatch(cartActions.addToCart(data.item))}
        />
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
    )
  }
}

export default Products

const styles = StyleSheet.create({})
