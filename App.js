import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import RunScreen from './screens/RunScreen';
import TrainingPlanScreen from './screens/TrainingPlanScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Run" component={RunScreen} />
        <Stack.Screen name="Training Plan" component={TrainingPlanScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
