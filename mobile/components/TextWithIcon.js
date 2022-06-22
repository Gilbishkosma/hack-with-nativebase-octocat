import React from 'react';
import {
  Text, Box, HStack, VStack, Spacer,
} from 'native-base';

function TextWithIcon({ Icon, title, language }) {
  return (
    <Box
      _dark={{
        borderColor: 'gray.600',
      }}
      pr="5"
      py="2"
    >
      <HStack space={3} justifyContent="space-between" alignItems="center">
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
        <Spacer />
        <Text
          fontSize="md"
          color="coolGray.500"
          _dark={{
            color: 'coolGray.300',
          }}
        >
          {language}
        </Text>
      </HStack>
    </Box>
  );
}

export default TextWithIcon;
