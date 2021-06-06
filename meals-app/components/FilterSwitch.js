import React from 'react'
import { StyleSheet, Text, View, Switch } from 'react-native'

import { colors } from '../styles';

const FilterSwitch = (props) => {
  return (
    <View style={styles.container}>
        <Text>{props.label}</Text>
        <Switch 
          value={props.value} 
          onValueChange={props.onValueChange} 
          trackColor={{ true: colors.primary }}
        />
    </View>
  )
}

export default FilterSwitch

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 8,
  },
})
