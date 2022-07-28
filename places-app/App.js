import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import PlacesNavigator from './navigation/PlacesNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <PlacesNavigator />
    </NavigationContainer>
  );
}
