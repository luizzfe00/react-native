import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = (props) => {

  return (
    <View style={{...styles.container, ...props.style}}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    shadowColor: 'rgba(0,0,0,0.26)',
    shadowOffset: {
      height: 5,
      width: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    backgroundColor: '#fff',
    elevation: 8,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  }
});

export default Card;