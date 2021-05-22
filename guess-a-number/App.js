import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';

import StartGame from './screens/startGame';
import Game from './screens/Game';
import GameOver from './screens/GameOver';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [rounds, setRounds] = useState(0);

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setRounds(0);
  }

  const gameOverHandler = (rounds) => {
    setRounds(rounds);
  }

  const restartGameHandler = () => {
    setRounds(0);
    setUserNumber(null);
  }

  let content = <StartGame onStart={startGameHandler} />;

  if (userNumber && rounds <= 0) {
    content = <Game userChoice={userNumber} onGameOver={gameOverHandler}/>;
  } else if (rounds > 0) {
    content = <GameOver rounds={rounds} correctNumber={userNumber} restartGame={restartGameHandler} />;
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
