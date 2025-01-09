import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import WorkoutList from '../workout/WorkoutList';
// import WorkoutDetail from '../workout/WorkoutDetail';

const Stack = createStackNavigator();

const WorkoutStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="WorkoutList" component={WorkoutList} />
      <Stack.Screen name="WorkoutDetail" component={WorkoutDetail} /> */}
    </Stack.Navigator>
  );
};

export default WorkoutStack;
