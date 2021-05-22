import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => props.onDelete(props.id)}>
      <View style={styles.textGoal}>
        <Text>
          {props.value}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  textGoal: {
    padding: 10,
    margin: 5,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  }
});

export default GoalItem;