import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WorkoutStack from './WorkoutStack';

const Tab = createBottomTabNavigator();

const MainStack = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
    </Tab.Navigator>
  );
};

export default MainStack;
