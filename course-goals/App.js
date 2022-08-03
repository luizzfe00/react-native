import React, { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [goal, setGoal] = useState('')
  const [courseGoals, setCourseGoals] = useState([{ label: 'create app', id: Math.random().toString() }])

  function goalInputHandler(enteredText) {
    setGoal(enteredText)
  }

  function addGoalHandler() {
    setCourseGoals((curr) => [...curr, { label: goal, id: Math.random().toString() }])
    setGoal('')
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course goal' value={goal} onChangeText={goalInputHandler} />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList 
          data={courseGoals} 
          renderItem={(data) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalItemText}>{data.item.label}</Text>
              </View>
            )}}
          keyExtractor={(item) => item.id}
        >
        </FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.2)'
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5
  },
  goalItem: {
     margin: 8,
     padding: 8,
     borderRadius: 8,
     backgroundColor: '#2E8BC0'
  },
  goalItemText: {
    color: 'white',
    textTransform: 'capitalize'
  }
});
