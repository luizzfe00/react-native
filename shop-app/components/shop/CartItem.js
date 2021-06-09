import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import colors from '../../styles/colors';

const CartItem = (props) => {
  const { product, onRemove, isDeletable } = props;
  
  return (
    <View style={styles.container}>
      <Text style={styles.itemData}>
        <Text style={styles.quantity}>{product.quantity} </Text><Text style={styles.mainText}>{product.productTitle}</Text>
      </Text>
      <View style={styles.itemData}>
        <Text style={styles.mainText}>{product.sum}</Text>
        {isDeletable && (
          <TouchableOpacity onPress={onRemove} style={styles.delete}>
            <Ionicons 
              name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'}
              size={23}
              color="red"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  itemData: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainText: {
    fontFamily: 'open-sans-bold',
    fontSize: 16,
  },
  quantity: {
    fontFamily: 'open-sans',
    color: '#888',
    fontSize: 16,
  },
  delete: {
    marginLeft: 20,
  },
})
