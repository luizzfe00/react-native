import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

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

const Game = (props) => {
  const [currentGuess, setCurrentGuess] = useState(generateRandom(1, 100, props.userChoice));

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.cardContainer}>
        <Button title="LOWER" color="red" />
        <Button title="GREATER" />
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