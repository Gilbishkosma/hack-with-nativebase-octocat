import React from 'react';
import {
  Button,
  HStack,
  Center,
  Icon,
} from 'native-base';

import {
  EvilIcons,
} from '@expo/vector-icons';

function CTAButton({ base, md, title }) {
  return (
    <HStack
      mt="5"
      space="4"
      alignItems="center"
      display={{
        base,
        md,
      }}
    >
      <Center
        p="2"
        borderRadius="4"
        _light={{
          bg: 'primary.50',
        }}
        _dark={{
          bg: 'secondary.700',
        }}
      >
        <Icon
          size="8"
          name="heart"
          as={EvilIcons}
          _dark={{
            bg: 'secondary.700',
            color: 'primary.500',
          }}
          _light={{
            bg: 'primary.50',
            color: 'primary.900',
          }}
        />
      </Center>
      <Button
        flex={1}
        h="100%"
        py={3}
        borderRadius="4"
        _dark={{
          bg: 'primary.700',
        }}
        _light={{
          bg: 'primary.900',
        }}
        _text={{
          fontSize: 'md',
          fontWeight: 'semibold',
        }}
        _hover={{
          _dark: {
            bg: 'primary.800',
          },
        }}
      >
        {title}
      </Button>
    </HStack>

  );
}

export default CTAButton;
