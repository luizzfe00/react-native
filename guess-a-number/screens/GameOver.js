import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

import MainButton from '../components/MainButton';
import globalStyle from '../utils/styles';

const GameOver = (props) => {

  const { rounds, correctNumber, restartGame } = props;

  return (
    <View style={styles.screen}>
      <Text style={globalStyle.titleText}>
        Game Over!
      </Text>
      <View style={styles.imageContainer}>
        <Image 
          source={require('../assets/success.png')} 
          style={styles.image} 
          resizeMode="cover"
        />
      </View>
      <Text style={globalStyle.bodyText}>
        Number of rounds: 
        <Text style={styles.highlight}>{rounds}</Text>
      </Text>
      <Text style={globalStyle.bodyText}>
        Number was: 
        <Text style={styles.highlight}>{correctNumber}</Text>
      </Text>
      <MainButton onClick={restartGame} buttonContainer={styles.mainButton}>New Game</MainButton>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image:{
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'black',
    width: 200,
    height: 200,
    overflow: 'hidden',
    marginVertical: 20,
  },
  highlight: {
    color: '#613ef2',
    fontWeight: 'bold',
    fontSize: 14,
  },
  mainButton: {
    marginTop: 16,
  }
})

export default GameOver;