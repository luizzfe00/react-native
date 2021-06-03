import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { colors } from '../styles'
import { CATEGORIES } from '../data/dummy-data'

const CategoryMeal = (props) => {
  const categoryId = props.navigation.getParam('categoryId')
  const selectedCategory = CATEGORIES.find((item) => item.id === categoryId)

  return (
    <View style={styles.screen}>
      <Text>{selectedCategory.title || 'Prato'}</Text>
      <Button 
        title="Ir para Detalhes" 
        onPress={() => props.navigation.navigate({ routeName: 'MealDetails' })} 
      />
      <Button
        title="Back"
        onPress={() => props.navigation.goBack()}
      />
    </View>
  )
}

CategoryMeal.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam('categoryId')
  const selectedCategory = CATEGORIES.find((item) => item.id === categoryId)

  return {
    headerTitle: selectedCategory.title,
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default CategoryMeal;