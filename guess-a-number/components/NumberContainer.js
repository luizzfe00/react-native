import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NumberContainer = (props) => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
    width: 60,
  },
  text: {
    fontSize: 22,
  }
});

export default NumberContainer;