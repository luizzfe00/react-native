import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CategoryMeal = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Category Meal</Text>
      <Button 
        title="Ir para Detalhes" 
        onPress={() => props.navigation.navigate({ routeName: 'Detalhes' })} 
      />
      <Button
        title="Back"
        onPress={() => props.navigation.goBack()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default CategoryMeal;