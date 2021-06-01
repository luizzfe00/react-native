import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Categories = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Categories</Text>
      <Button 
        title="Ir para pratos" 
        onPress={() => {
          props.navigation.navigate({ routeName: 'Pratos' });
        }} 
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

export default Categories;