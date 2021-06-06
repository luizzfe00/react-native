import React, { useEffect, useCallback } from 'react';
import { Item, HeaderButtons } from 'react-navigation-header-buttons';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  Image 
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import CustomHeaderButton from '../components/HeaderButton';
import ListItem from '../components/ListItem';
import { toggleFavorite } from '../store/actions/mealsAction'


const MealDetails = (props) => {
  const availableMeals = useSelector((state) => state.meals.meals)
  const mealID = props.navigation.getParam('mealId');
  const isFavoriteMeal = useSelector((state) => 
    state.meals.favoriteMeals.some((meal) => meal.id === mealID)
  )
  const selectedMeal = availableMeals.find((meal) => meal.id === mealID)
  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealID));
  }, [dispatch, mealID]);

  useEffect(() => {
    props.navigation.setParams({ toggleFav: toggleFavoriteHandler })
  }, [toggleFavoriteHandler])

  useEffect(() => {
    props.navigation.setParams({ isFav: isFavoriteMeal })
  }, [isFavoriteMeal])

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text>{selectedMeal.duration} min</Text>
        <Text>{selectedMeal.complexity.toUpperCase()}</Text>
        <Text>{selectedMeal.affordability.toUpperCase()}</Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  )
}

MealDetails.navigationOptions = (navigationData) => {
  const toggleFav = navigationData.navigation.getParam('toggleFav');
  const mealTitle = navigationData.navigation.getParam('mealTitle');
  const isFav = navigationData.navigation.getParam('isFav');

  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item 
          title="Favorite" 
          iconName={isFav ? 'ios-star' : 'ios-star-outline'} 
          onPress={toggleFav} 
        />
      </HeaderButtons>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around'
  },
  title: {
    fontFamily: 'open-sans-bold',
    textAlign: 'center',
  }
});

export default MealDetails;