import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/login';
import RegisterStep1 from '../screens/RegisterStep1';
import RegisterStep2 from '../screens/RegisterStep2';
// import RegisterStep3 from '../auth/RegisterStep3';
// import RegisterSuccess from '../auth/RegisterSuccess';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="RegisterStep1" component={RegisterStep1} />
      <Stack.Screen name="RegisterStep2" component={RegisterStep2} />
      {/* <Stack.Screen name="RegisterStep3" component={RegisterStep3} />
      <Stack.Screen name="RegisterSuccess" component={RegisterSuccess} /> */}
    </Stack.Navigator>
  );
};

export default AuthStack;
