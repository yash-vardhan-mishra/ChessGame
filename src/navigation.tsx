import React from 'react';
import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import Chess from './Chess';

const Stack = createNativeStackNavigator();
enableScreens();
const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Chess} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
