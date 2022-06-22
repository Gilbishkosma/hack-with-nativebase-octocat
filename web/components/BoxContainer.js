import React from 'react';
import {
  Text, Box, VStack,
} from 'native-base';

function BoxContainer({
  amount, value, color, darkColor,
}) {
  return (
    <Box
      borderWidth="1"
      borderColor={color}
      width={350}
      height={85}
      mr={2}
      p="3"
      rounded="lg"
      _dark={{
        borderColor: darkColor,
      }}
    >
      <VStack
        space={2}
        alignItems="center"
      >
        <Text
          fontSize="xl"
          fontWeight="medium"
          color={color}
          _dark={{
            color: darkColor,
          }}
          textAlign="center"
        >
          {amount}
        </Text>
        <Text
          fontSize="xs"
          fontWeight="medium"
          color={color}
          textAlign="center"
          _dark={{
            color: darkColor,
          }}
        >
          {value}
        </Text>
      </VStack>
    </Box>
  );
}

export default BoxContainer;
