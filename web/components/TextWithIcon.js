import React from 'react';
import {
  Text, Box, HStack, VStack, Pressable,
} from 'native-base';

function TextWithIcon({ Icon, title }) {
  return (
    <Box
      _dark={{
        borderColor: 'gray.600',
      }}
      py="2"
    >
      <Pressable
        _hover={{
          bg: 'primary.100',
          _dark: {
            bg: 'secondary.700',
          },
        }}
        _pressed={{
          bg: 'primary.50',
          _dark: {
            bg: 'secondary.800',
          },
        }}
        px="3"
        borderRadius="md"
      >
        <HStack space={2} alignItems="center">
          <Text color="black" _dark={{ color: 'white' }}>{Icon}</Text>
          <VStack p="3">
            <Text
              fontSize="md"
              color="coolGray.800"
              _dark={{
                color: 'white',
              }}
            >
              {title}
            </Text>
          </VStack>
        </HStack>
      </Pressable>
    </Box>
  );
}

export default TextWithIcon;
