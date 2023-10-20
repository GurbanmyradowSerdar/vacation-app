/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import StartContainerScreen from './src/screens/start/StartContainer';
import HomeContainerScreen from './src/screens/home/HomeContainer';
import HolidayContainerScreen from './src/screens/holiday/HolidayContainer';

export type RootStackParamList = {
  home: undefined;
  holiday: {
    id: string;
    rating: number;
    name: string;
  };
  start: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="start"
          component={StartContainerScreen}
          options={{
            header: () => {
              return <></>;
            },
          }}
        />
        <Stack.Screen
          name="home"
          component={HomeContainerScreen}
          options={{
            animation: 'simple_push',
            header: () => {
              return <></>;
            },
          }}
        />
        <Stack.Screen
          name="holiday"
          component={HolidayContainerScreen}
          options={{
            header: () => {
              return <></>;
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
