import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CategoryGridItem from '../components/CategoryGridItem';
import HeaderButton from '../components/HeaderButton';

import { CATEGORIES } from '../data/dummy-data';

const Categories = (props) => {

  const renderGridItem = (itemData) => {
    return (
      <CategoryGridItem 
        data={itemData.item} 
        onSelect={() => 
          props.navigation.navigate(
            { 
              routeName: 'CategoryMeals', 
              params: {
                categoryId: itemData.item.id
              }
            })
          }
      />)
  }

  return (
    <FlatList 
      data={CATEGORIES} 
      renderItem={renderGridItem} 
      numColumns={2} 
    />
  )
}

Categories.navigationOptions = (navData) => {
  return {
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item 
          title="Menu" 
          iconName="ios-menu" 
          onPress={() => {
            navData.navigation.toggleDrawer();
          }} 
        />
      </HeaderButtons>
    )
  }
}

const styles = StyleSheet.create({
});

export default Categories;