import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import { useSelector } from 'react-redux'

import MealItem from './MealItem';

const MealList = (props) => {
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);

  const renderMealItem = (itemData) => {
    const isFavorite = favoriteMeals.find(
      (meal) => meal.id === itemData.item.id
    );
    return (
      <MealItem 
        meal={itemData.item} 
        onSelect={() => props.nav.navigate(
          { routeName: 'MealDetails', params: {
            mealId: itemData.item.id,
            mealTitle: itemData.item.title,
            isFav: isFavorite,
          }}
        )}
      />
      )
  }

  return (
    <View style={styles.screen}>
      <FlatList 
        data={props.mealData} 
        renderItem={renderMealItem}
        style={{ width: '100%' }}
      />
    </View>
  )
}

export default MealList

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
