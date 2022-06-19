import React from 'react';
import {
  NativeBaseProvider,
  extendTheme,
  theme as nbTheme,
} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Screen1, Screen2, Screen3, Screen4, Screen5,
} from './components/AppScreens';
import Home from './components/Home';

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
};

// extend the theme
export const theme = extendTheme({
  config,
  colors: {
    primary: nbTheme.colors.violet,
    secondary: nbTheme.colors.coolGray,
  },
});
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>

        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Screen1" component={Screen1} />
          <Stack.Screen name="Screen2" component={Screen2} />
          <Stack.Screen name="Screen3" component={Screen3} />
          <Stack.Screen name="Screen4" component={Screen4} />
          <Stack.Screen name="Screen5" component={Screen5} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
