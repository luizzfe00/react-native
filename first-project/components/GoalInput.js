import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const handleAddGoal = () => {
    props.addGoal(enteredGoal);
    setEnteredGoal('');
    props.setShowModal(false);
  }

  const handleCancel = () => {
    setEnteredGoal('');
    props.setShowModal(false);
  }

  return (
    <Modal visible={props.showModal} animationType="slide">
      <View style={styles.container}>
        <TextInput placeholder="ADD Goal" style={styles.textInput} value={enteredGoal} onChangeText={(text) => setEnteredGoal(text)} />
        <View style={styles.buttonContainer}>
          <View style={styles.button} >
            <Button title="Cancel" color="red" onPress={() => handleCancel()} />
          </View>
          <View style={styles.button}>
            <Button title="Add"  onPress={() => handleAddGoal(enteredGoal)}/>
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },  
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
    marginTop: 8,
  },
  button: {
    width: '50%',
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%',
  }
})

export default GoalInput;