import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreens from '../Screens/HomeScreens';
import ProfileScreens from '../Screens/ProfileScreens';
import AdvanceScreens from '../Screens/AdvanceScreens';
import CartScreens from '../Screens/CartScreens';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
const BottomNavigator = () => {
  
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator activeColor={"blue"}
    inactiveColor={"yellow"}>
      <Tab.Screen
        name="homeScreens"
        component={HomeScreens}
      
        options={{
          headerShown: false,
          tabBarLabel: '',
          color:'black',
          tabBarActiveTintColor:'blue',
          tabBarInactiveTintColor:"black",
          tabBarIcon: ({color, size}) => (
            <Octicons name="home" color={color} size={21} />
          ),
        }}
      />
      <Tab.Screen
        name="profileScreens"
        component={ProfileScreens}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarActiveTintColor:'blue',
          tabBarInactiveTintColor:"black",
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="user-o" color={color} size={21} />
          ),
        }}
      />
      <Tab.Screen
        name="advanceScreens"
        component={AdvanceScreens}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarActiveTintColor:'blue',
          tabBarInactiveTintColor:"black",
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="cart-heart"
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="cartScreens"
        component={CartScreens}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarActiveTintColor:'blue',
          tabBarInactiveTintColor:"black",
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-menu-sharp" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
