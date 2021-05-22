import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addGoal = (newGoal) => {
    setGoals((prev) => [...prev, { key: Math.random().toString(), value: newGoal }]);
    setShowModal(false);
  }

  const removeGoalHandler = (id) => {
    setGoals(goals.filter((item) => item.key !== id));
  }
  
  return (
    <View style={styles.screen}>
      <Button title="Add new goal" onPress={() => setShowModal(true)} />
      <GoalInput setGoals={setGoals} showModal={showModal} setShowModal={setShowModal} addGoal={addGoal} />
      <FlatList key={(item, _) => item.id} data={goals} renderItem={(itemData) => (
          <GoalItem value={itemData.item.value} onDelete={removeGoalHandler} id={itemData.item.key} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    height: '100%',
  },
});
