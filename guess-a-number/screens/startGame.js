import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

import DefaultStyles from '../utils/styles';
import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import MainButton from '../components/MainButton';

const StartGame = (props) => {
  const [value, setValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const handleText = (input) => {
    setValue(input.replace(/[^0-9]/g, ''));
  }

  const handleReset = () => {
    setValue('');
  }

  const handleConfirm = () => {
    const chosenNumber = parseInt(value);

    if (chosenNumber === NaN || chosenNumber <= 0 || chosenNumber >= 99) {
      Alert.alert(
        'Invalid number!', 
        'You must select a number between 0 and 99.', 
        [{ text: 'Close', style: 'destructive', onPress: handleReset }]
        )
    };

    setConfirmed(true);
    setValue('');
    setSelectedNumber(parseInt(value));
  }

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card>
        <Text style={DefaultStyles.titleText} >You selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MainButton onClick={() => props.onStart(selectedNumber)}>Start Game</MainButton>
      </Card>
    )
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={DefaultStyles.titleText}>Start New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input 
            style={styles.input} 
            blurOnSubmit 
            autoCapitalize="none" 
            autoCorrect={false} 
            keyboardType="number-pad" 
            maxLength={2}
            onChangeText={handleText}
            value={value} 
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <MainButton
                buttonContainer={DefaultStyles.mainButtonDanger} 
                buttonText={styles.buttonText}
                onCLick={() => handleReset()}
              >
                Reset
              </MainButton>
            </View>
            <View style={styles.button}>
              <MainButton 
                buttonContainer={DefaultStyles.mainButtonConfirm}
                buttonText={styles.buttonText}
                onClick={() => handleConfirm()}
              >
                Confirm
              </MainButton>
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 4,
    paddingVertical: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 400,
    maxWidth: '90%',
    alignItems: 'center',
    marginBottom: 10,
  },
  button: {
    width: 124,
    marginTop: 10,
    marginLeft: 6,
  },
  input: {
    width: 50,
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center'
  }
})

export default StartGame;