import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigation from './src/Navigator/RootNavigation'
import 'react-native-gesture-handler';

const App = () => {
  return (
  <NavigationContainer>
   <RootNavigation/>
  </NavigationContainer>
  )
}

export default App