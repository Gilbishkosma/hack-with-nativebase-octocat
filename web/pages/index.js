import React from 'react';
import NextLink from 'next/link';
import {
  Center,
  Text,
  Heading,
  VStack,
  Button,
  Link,
} from 'native-base';
import ColorModeSwitch from '../components/ColorModeSwitch';

// Start editing here, save and see your changes.
export default function App() {
  return (
    <Center
      flex={1}
      _dark={{ bg: 'blueGray.900' }}
      _light={{ bg: 'blueGray.50' }}
    >
      <VStack alignItems="center" space="md">
        <Heading>Welcome to our App</Heading>
        <Text>
          Click any one of the screen from below to load it:
        </Text>
      </VStack>
      <ColorModeSwitch />
      <LinkButton path="screen1" title="Screen 1" />
      <LinkButton path="screen2" title="Screen 2" />
      <LinkButton path="screen3" title="Screen 3" />
      <LinkButton path="screen4" title="Screen 4" />
      <LinkButton path="screen5" title="Screen 5" />
      <Button variant="outline" colorScheme="secondary">
        asd
      </Button>
    </Center>
  );
}

function LinkButton({ path, title }) {
  return (
    <NextLink href={path} passHref>
      <Link
        mt="6"
        _text={{
          textDecoration: 'none',
        }}
      >
        {title}
      </Link>
    </NextLink>
  );
}
