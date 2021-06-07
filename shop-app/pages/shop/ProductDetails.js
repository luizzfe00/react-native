import React from 'react'
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';

import * as cartActions from '../../store/actions/cart';
import colors from '../../styles/colors';

const ProductDetails = (props) => {
  const product = props.navigation.getParam('product');
  const dispatch = useDispatch();

  // const selectedProduct = useSelector((state) => state.products.availableProducts
  //   .find((item) => item.id === product.id));

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: product.imageUrl }} />
      <View style={styles.button}>
        <Button 
          color={colors.primary} 
          title="Add to Cart" 
          onPress={() => dispatch(cartActions.addToCart(product))} 
        />
      </View>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      <Text style={styles.description}>{product.description}</Text>
    </ScrollView>
  )
}

ProductDetails.navigationOptions = (navData) => {
  const product = navData.navigation.getParam('product');

  return {
    headerTitle: product.title
  };
}

export default ProductDetails

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  price: {
    fontSize: 20,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: 'open-sans-bold',
  },
  description: {
    fontFamily: 'open-sans',
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 20,
  },
  button: {
    marginVertical: 8,
    alignItems: 'center',
  }
})
