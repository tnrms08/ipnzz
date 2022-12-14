import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FrameSelect from './Component/FrameSelect.js';
import Cam from './Component/Cam.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="FrameSelect" options={{headerShown:false}} component={FrameSelect} />
        <Stack.Screen name="Cam" options={{headerShown:false}} component={Cam} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
