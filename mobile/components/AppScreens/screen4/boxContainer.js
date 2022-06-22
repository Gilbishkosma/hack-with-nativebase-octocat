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
      width={170}
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
          textAlign="center"
        >
          {amount}
        </Text>
        <Text
          fontSize="xs"
          fontWeight="medium"
          color={color}
          textAlign="center"
        >
          {value}
        </Text>
      </VStack>
    </Box>
  );
}

export default BoxContainer;
