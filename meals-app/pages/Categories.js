import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import { colors } from '../styles';

import { CATEGORIES } from '../data/dummy-data';

const Categories = (props) => {
  const renderItem = (itemData) => {
    return (
      <TouchableOpacity 
        style={styles.itemContainer}
        onPress={() => 
          props.navigation.navigate(
            { 
              routeName: 'CategoryMeals', 
              params: {
                categoryId: itemData.item.id
              }
            })}
      >
      <View>
        <Text>{itemData.item.title}</Text>
      </View>
      </TouchableOpacity>
    )
  }

  return (
    <FlatList 
      data={CATEGORIES} 
      renderItem={renderItem} 
      numColumns={2} 
    />
  )
}

Categories.navigationOptions = {
  headerTitle: 'Categorias',
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    justifyContent: 'center',
    margin: 15,
    height: 120,
    borderWidth: 1,
  }
});

export default Categories;