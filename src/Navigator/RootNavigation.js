import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigator from './BottomNavigator';
const RootNavigation = () => {
  const rootStack=createStackNavigator()
  return (
  <rootStack.Navigator>
    <rootStack.Screen name='landing' component={BottomNavigator} options={{headerShown:false}}/>
  </rootStack.Navigator>
  )
}

export default RootNavigation