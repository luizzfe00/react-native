import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const GameOver = (props) => {

  const { rounds, correctNumber, restartGame } = props;

  return (
    <View style={styles.screen}>
      <Text>
        Game Over!
      </Text>
      <Text>
        Number of rounds: {rounds}
      </Text>
      <Text>
        Number was: {correctNumber}
      </Text>
      <Button title="NEW GAME" onPress={restartGame} />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default GameOver;