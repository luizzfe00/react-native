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


const ProductItem = (props) => {
  const { onSelect, product, children } = props;

  const {price} = product;
  let TouchableComp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.container}>
      <View style={styles.touchable}>
        <TouchableComp onPress={onSelect} useForeground>
          <View>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: product.imageUrl}} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{product.title}</Text>
              <Text style={styles.price}>${product.price.toFixed(2)}</Text>
            </View>
            <View style={styles.buttonContainer}>
              {children}
              {/* <Button 
                title="View Details" 
                onPress={props.onViewDetail} 
                color={colors.primary}
              />
              <Button 
                title="To Cart" 
                onPress={props.onAddToCart} 
                color={colors.lightGreen}
              /> */}
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
    height: '23%',
    paddingHorizontal: 26,
  },
  textContainer: {
    alignItems: 'center',
    height: '17%',
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
