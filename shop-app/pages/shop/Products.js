import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { useSelector } from 'react-redux';

import ProductItem from '../../components/shop/ProductItem';

const Products = (props) => {
  const products = useSelector((state) => state.products.availableProducts);
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
          onAddToCart={() => {}}
        />
      )}
    />
  )
}

export default Products

const styles = StyleSheet.create({})
