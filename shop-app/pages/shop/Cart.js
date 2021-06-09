import React from 'react'
import { StyleSheet, Text, View, FlatList, Button } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';

import CartItem from '../../components/shop/CartItem';
import colors from '../../styles/colors';
import * as cartActions from '../../store/actions/cart';
import * as orderActions from '../../store/actions/orders';

const Cart = (props) => {
  const dispatch = useDispatch();
  const total = useSelector((state) => state.cart.total)
  const items = useSelector((state) => {
    const cardItems = [];
    for (const key in state.cart.items) {
      cardItems.push({
        productId: key,
        productTitle: state.cart.items[key].productTitle,
        productPrice: state.cart.items[key].productPrice,
        quantity: state.cart.items[key].quantity,
        sum: state.cart.items[key].sum,
      })
    }
    return cardItems.sort((a, b) => a.productId > b.productId ? 1 : -1);
  })

  return (
    <View style={styles.container}>
      <View style={styles.summary}>
        <Text style={styles.total}>Total: 
          <Text style={styles.amount}> ${Math.round(total.toFixed(2) * 100) / 100}</Text>
        </Text>
        <Button
          title="Order Now"
          color={colors.green}
          disabled={items.length === 0}
          onPress={() => {
            dispatch(orderActions.addOrder(items, total))
          }}
        />
      </View>
      <FlatList 
        data={items}
        keyExtractor={(item) => item.productId}
        renderItem={(data) => (
          <CartItem
            isDeletable
            product={data.item}
            onRemove={() => {
              dispatch(cartActions.removeFromCart(data.item.productId))
            }} 
          />
        )}
      />
    </View>
  )
}

Cart.navigationOptions = {
  headerTitle: 'Your Cart',
}

export default Cart

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    padding: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
  }, 
  total: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
  },
  amount: {
    color: colors.green,
  }
})
