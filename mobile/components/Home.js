import React from 'react';
import {
  Text,
  Center,
  Heading,
  VStack,
  Button,
} from 'native-base';
import NativeBaseIcon from './NativeBaseIcon';
import ColorModeSwitch from './ColorModeSwitch';

function Home({ navigation }) {
  return (
    <Center
      _dark={{ bg: 'blueGray.900' }}
      _light={{ bg: 'blueGray.50' }}
      px={4}
      flex={1}
    >
      <ColorModeSwitch />
      <VStack space={5} alignItems="center">
        <NativeBaseIcon />
        <Heading size="lg">Welcome to our App</Heading>
        <Text>
          Click any one of the screen from below to load it:
        </Text>

        <LinkButton title="Screen 1" onClick={() => navigation.navigate('Screen1')} />
        <LinkButton title="Screen 2" onClick={() => navigation.navigate('Screen2')} />
        <LinkButton title="Screen 3" onClick={() => navigation.navigate('Screen3')} />
        <LinkButton title="Screen 4" onClick={() => navigation.navigate('Screen4')} />
      </VStack>
    </Center>
  );
}

function LinkButton({ title, onClick }) {
  return (
    <Button variant="outline" colorScheme="secondary" onPress={onClick}>
      {title}
    </Button>
  );
}

export default Home;
