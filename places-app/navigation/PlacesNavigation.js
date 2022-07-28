import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import colors from '../styles/colors';
import * as Screens from '../screens';

const Nav = createStackNavigator();

export function Navigator() {
  return (
    <Nav.Navigator
      initialRouteName="Places"
      screenOptions={{
        headerTintColor: colors.primary,      
      }}
    >
      <Nav.Screen 
        name="Places"
        component={Screens.PlacesList}
        options={{ title: 'All Places' }}
      />
      <Nav.Screen 
        name="Place Details"
        component={Screens.PlaceDetails}
        options={{ title: 'Place Details' }}
      />
      <Nav.Screen 
        name="New Place"
        component={Screens.NewPlace}
        options={{ title: 'New Place' }}
      />
      <Nav.Screen 
        name="Maps"
        component={Screens.MapScreen}
        options={{ title: 'Maps' }}
      />
    </Nav.Navigator>
  )
}

export default Navigator;