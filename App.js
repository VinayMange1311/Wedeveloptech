import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboardingscreen from './src/Screens/Onboarding';
import Termandcondition from './src/Screens/Termsandcondition';
import Location from './src/Screens/Location';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={Onboardingscreen} />
        <Stack.Screen name="Termandcondition" component={Termandcondition} />
        <Stack.Screen name="Location" component={Location} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;