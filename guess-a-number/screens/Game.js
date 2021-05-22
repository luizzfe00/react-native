import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

import DefaultStyles from '../utils/styles';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const generateRandom = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandom(min, max, exclude);
  }
  return rndNum;
}

const GUESS_OPT = {
  LOWER: 0,
  HIGHER: 1,
}

const Game = (props) => {
  const [currentGuess, setCurrentGuess] = useState(generateRandom(1, 100, props.userChoice));
  const [rounds, setRounds] = useState(0);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { userChoice, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(rounds);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = (direction) => {
    if ((direction === GUESS_OPT.LOWER && currentGuess < userChoice)
      || (direction === GUESS_OPT.HIGHER && currentGuess > userChoice)) {
        Alert.alert('Wrong hint!!', 'You know this is wrong...', [
          {text: 'Sorry!', style: 'cancel'}
        ])
        return;
      }
    
    if (direction === GUESS_OPT.LOWER) {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }

    const nextGuess = generateRandom(currentLow.current, currentHigh.current, currentGuess);
    setCurrentGuess(nextGuess);
    setRounds((prev) => prev + 1);
  }

  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.titleText}>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.cardContainer}>
        <Button title="LOWER" color="red" onPress={nextGuessHandler.bind(this, GUESS_OPT.LOWER)} />
        <Button title="GREATER" onPress={nextGuessHandler.bind(this, GUESS_OPT.HIGHER)} />
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%',
  }
});

export default Game;