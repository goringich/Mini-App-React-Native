import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './AuthStack';
import MainStack from './MainStack';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Auth" component={AuthStack} />
      <Stack.Screen name="Main" component={MainStack} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
