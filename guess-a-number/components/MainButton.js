import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const MainButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={props.onClick}>
      <View style={{ ...styles.button, ...props.buttonContainer }}>
        <Text style={{ ...styles.buttonText, ...props.buttonText }}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000000',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontFamily: 'open-sans',
    fontSize: 18,
  },
});

export default MainButton;