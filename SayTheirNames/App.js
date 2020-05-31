import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigator from './Navigator/RootStackNavigator';
import { navigationRef,isMountedRef } from './Navigator/RootNavigation';
import { YellowBox } from 'react-native'



YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
  'Animated'
])

// (...)

export default function App() {

  return (
    <NavigationContainer ref={navigationRef}>
       <RootStackNavigator />
    </NavigationContainer>

  )
}