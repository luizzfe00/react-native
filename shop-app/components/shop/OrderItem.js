import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import colors from '../../styles/colors';
import CartItem from './CartItem';

const Orderitem = (props) => {
  const { totalAmount: value, readableDate: date, items } = props.order;
  const [showDetails, setShowDetails] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.summary}>
        <Text style={styles.value}>${value.toFixed(2)}</Text>
        <Text style={styles.date.to}>{date}</Text>
      </View>
      <Button 
        title={showDetails ? 'Close Details' : 'Show Details'} 
        color={colors.accent}
        onPress={() => setShowDetails((curr) => !curr)}
      />
      {showDetails && (
        <View style={styles.itemDetails}>
          {items.map((item) => (
            <CartItem key={item.productId} product={item} />
          ))}
        </View>
      )}
    </View>
  )
}

export default Orderitem

const styles = StyleSheet.create({
  container: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    margin: 20,
    padding: 10,
    alignItems: 'center',
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  value: {
    fontFamily: 'open-sans-bold',
    fontSize: 16,
  },
  date: {
    fontFamily: 'open-sans',
    fontSize: 14,
    color: '#888',
  },
  itemDetails: {
    width: '100%',
  }
})
