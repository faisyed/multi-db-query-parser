import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './DrawerNavigator'
import Home from '../screens/Home';
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={DrawerNavigator}
        options={{
          title: 'SQLChats',
          headerStyle: {
            backgroundColor: '#FFC300',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center',
            height: 40,
            fontSize: 25
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
