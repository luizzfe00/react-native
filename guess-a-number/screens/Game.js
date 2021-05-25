import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useRef, useState } from 'react';
import { Alert, ScrollView, StyleSheet, FlatList, Text, View } from 'react-native';
import Card from '../components/Card';
import MainButton from '../components/MainButton';
import NumberContainer from '../components/NumberContainer';
import DefaultStyles from '../utils/styles';

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
  const initialGuess = generateRandom(1, 100, props.userChoice)

  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [rounds, setRounds] = useState([initialGuess.toString()]);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { userChoice, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(rounds.length);
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
      currentLow.current = currentGuess + 1;
    }

    const nextGuess = generateRandom(currentLow.current, currentHigh.current, currentGuess);
    setCurrentGuess(nextGuess);
    setRounds((curr) => [nextGuess.toString(), ...curr]);
  }

  const renderListItem = (listLenght, itemData) => (
    <View style={styles.listItem}>
      <Text style={DefaultStyles.bodyText}>#{listLenght - itemData.index}</Text>
      <Text style={DefaultStyles.bodyText}>{itemData.item}</Text>
    </View>
  )

  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.titleText}>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.cardContainer}>
        <MainButton 
          buttonContainer={{...DefaultStyles.mainButtonDanger, ...styles.buttons}}
          onClick={nextGuessHandler.bind(this, GUESS_OPT.LOWER)}
        >
          <Ionicons name="md-remove" size={24} color="white"/>
        </MainButton>
        <MainButton 
          buttonContainer={{...DefaultStyles.mainButtonConfirm, ...styles.buttons}}
          onClick={nextGuessHandler.bind(this, GUESS_OPT.HIGHER)}
        >
          <Ionicons name="md-add" size={24} color="white" />
        </MainButton>
      </Card>
      <View style={styles.listContainer}>
        {/* <ScrollView style={styles.scrollView} contentContainerStyle={styles.listContent}>
          {rounds.map((guess, index) => renderListItem(guess, rounds.length - index))}
        </ScrollView> */}
        <FlatList
          keyExtractor={(item) => item}
          data={rounds} 
          renderItem={renderListItem.bind(this, rounds.length)} 
          contentContainerStyle={styles.listContent}
        />
      </View>
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
    justifyContent: 'center',
    marginTop: 20,
    width: 260,
    maxWidth: '90%',
  },
  buttons: {
    marginHorizontal: 16,
    borderRadius: 30,
    width: 80,
  },
  listItem: {
    borderColor: '#DDD',
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  listContent: {
    // alignItems: 'center',
    justifyContent: 'flex-end',
  },
  listContainer: {
    flex: 1, // Scroll in Android
    width: '60%',
    // marginTop: 20,
    // position: 'relative',
  },
  scrollView: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  }
});

export default Game;