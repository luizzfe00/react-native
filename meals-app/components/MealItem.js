import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, ImageBackground } from 'react-native'

const MealItem = (props) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={props.onSelect}>
          <View>
            <View style={{ ...styles.row, ...styles.header }}>
              <ImageBackground source={{ uri: props.meal.imageUrl }} style={styles.img}>
                <View style={styles.titleContainer}>
                  <Text numberOfLines={1} style={styles.title}>{props.meal.title}</Text>
                </View>
              </ImageBackground>
            </View>
            <View style={{ ...styles.row, ...styles.details }}>
              <Text>{props.meal.duration} min</Text>
              <Text>{props.meal.complexity.toUpperCase()}</Text>
              <Text>{props.meal.affordability.toUpperCase()}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 6
  },
  row: {
    flexDirection: 'row',
  },
  header: {
    height: '85%',
  },
  details: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: '15%',
  },
  img: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
  },
  titleContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12,
  }
})

export default MealItem;