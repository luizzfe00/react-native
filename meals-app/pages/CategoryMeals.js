import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import MealList from '../components/MealList'

import { CATEGORIES } from '../data/meals-data'

const CategoryMeal = (props) => {
  const categoryId = props.navigation.getParam('categoryId')

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter((meal) => meal.category.indexOf(categoryId) >= 0);

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.fallback}>
        <Text>No meals found, maybe check your filters</Text>
      </View>
    )
  }

  return (
    <MealList mealData={displayedMeals} nav={props.navigation} />
  )
}

CategoryMeal.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam('categoryId')
  const selectedCategory = CATEGORIES.find((item) => item.id === categoryId)

  return {
    headerTitle: selectedCategory.title
  }
}

export default CategoryMeal;

const styles = StyleSheet.create({
  fallback: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})