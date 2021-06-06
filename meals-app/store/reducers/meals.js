import { MEALS } from '../../data/meals-data'
import { TOGGLE_FAVORITE, SET_FILTERS } from '../actions/mealsAction';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
}


const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const extistingIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      );
      if (extistingIndex >= 0) {
        const updatedFavorites = [...state.favoriteMeals];
        updatedFavorites.splice(extistingIndex, 1);
        return { ...state, favoriteMeals: updatedFavorites }
      } else {
        return { 
          ...state, 
          favoriteMeals: state.favoriteMeals
            .concat(state.meals.find(
              (meal) => meal.id === action.mealId
            )) 
        }
      }
    case SET_FILTERS:
      const activeFilters = action.filters;
      const updatedFilteredMeals = state.meals.filter((meal) => {
        if (activeFilters.glutenFree && !meal.isGlutenFree)
          return false;
        if (activeFilters.lactoseFree && !meal.isLactoseFree)
          return false;
        if (activeFilters.vegeterian && !meal.isVegeterian)
          return false;
        if (activeFilters.vegan && !meal.isVegan)
          return false;

        return true;
      })
      return { ...state, filteredMeals: updatedFilteredMeals };
    default:
      return state;
  }
}

export default mealsReducer;