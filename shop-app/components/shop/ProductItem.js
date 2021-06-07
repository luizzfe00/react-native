import React from 'react'
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  Button, 
  TouchableOpacity ,
  TouchableNativeFeedback,
  Platform
} from 'react-native'

import colors from '../../styles/colors';

const ProductItem = (props) => {
  let TouchableComp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.container}>
      <View style={styles.touchable}>
        <TouchableComp onPress={props.onViewDetail} useForeground>
          <View>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: props.product.imageUrl}} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{props.product.title}</Text>
              <Text style={styles.price}>${props.product.price.toFixed(2)}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <Button 
                title="View Details" 
                onPress={props.onViewDetail} 
                color={colors.primary}
              />
              <Button 
                title="To Cart" 
                onPress={props.onAddToCart} 
                color={colors.lightGreen}
              />
            </View>
          </View>
        </TouchableComp>
      </View>
    </View>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  container: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    height: 300,
    margin: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    marginVertical: 2,
  },
  price: {
    fontFamily: 'open-sans',
    fontSize: 14,
    color: '#888',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    height: '25%',
    paddingHorizontal: 26,
  },
  textContainer: {
    alignItems: 'center',
    height: '15%',
    padding: 10,
  },
  imageContainer: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  touchable: {
    overflow: 'hidden',
    borderRadius: 10,
  }
})
