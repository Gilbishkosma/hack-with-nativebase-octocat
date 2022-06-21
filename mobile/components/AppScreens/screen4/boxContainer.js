import React from 'react';
import {
  Text, Box, VStack,
} from 'native-base';

function BoxContainer({ text1, text2, color }) {
  return (
    <Box
      borderWidth="1"
      borderColor={color}
      width={170}
      p="3"
      rounded="lg"
    >
      <VStack
        space={2}
        alignItems="center"
      >
        <Text
          fontSize="xl"
          fontWeight="medium"
          color={color}
          textAlign="center"
        >
          {text1}
        </Text>
        <Text
          fontSize="xs"
          fontWeight="medium"
          color={color}
          textAlign="center"
        >
          {text2}
        </Text>
      </VStack>
    </Box>
  );
}

export default BoxContainer;
