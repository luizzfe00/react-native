import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Platform, TouchableNativeFeedback } from 'react-native';

const CategoryGridItem = (props) => {
  let Touchable = TouchableOpacity;
  if (Platform.OS === 'android')
    Touchable = TouchableNativeFeedback;
  return (
    <View style={styles.itemContainer}>
    <Touchable 
      style={{ flex: 1 }}
      onPress={props.onSelect}
    >
      <View style={{ ...styles.container, backgroundColor: props.data.color }}>
        <Text style={styles.title} numberOfLines={2}>{props?.data.title}</Text>
      </View>
    </Touchable>
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    justifyContent: 'center',
    margin: 15,
    height: 120,
    borderRadius: 10,
    overflow: Platform.OS === 'android' 
      && Platform.Version >= 21 
        ? 
        'hidden' 
        : 
        'visible',
    elevation: 5,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    textAlign: 'right'
  }
});

export default CategoryGridItem;