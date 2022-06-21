import React from 'react';
import {
  Text, HStack, Box, VStack, Badge,
} from 'native-base';

function PortfolioBox() {
  return (
    <Box
      bg="coolGray.200"
      py="4"
      px="3"
      borderRadius="5"
      rounded="md"
      width={358}
      ml="auto"
      mr="auto"
      pl="4"
      mt="5"
      maxWidth="100%"
      color="black"
      mb="0.5"
    >
      <HStack>
        <Box justifyContent="space-between" width="full">
          <VStack space="2">
            <Text fontSize="sm" fontWeight="bold">
              Aditya Birla Sun Life Flexi Cap- Fund
            </Text>
            <Box alignItems="flex-start">
              <Badge
                bg="emerald.600"
                _text={{
                  color: 'white',
                }}
                variant="solid"
                rounded="4"
              >
                SIP × 6
              </Badge>
            </Box>
          </VStack>
          <HStack space={12} pt="3">
            <VStack space="2">
              <Text
                fontSize="md"
                fontWeight="medium"
                color="coolGray.500"
                textAlign="center"
              >
                Investment
              </Text>
              <Text
                fontSize="lg"
                fontWeight="medium"
                color="coolGray.800"
                textAlign="center"
              >
                $50,000
              </Text>
            </VStack>

            <VStack space="2" justifyContent="space-between">
              <Text
                fontSize="md"
                fontWeight="medium"
                color="coolGray.500"
                textAlign="center"
              >
                Current Value
              </Text>
              <Text
                fontSize="lg"
                fontWeight="medium"
                color="coolGray.800"
                textAlign="center"
              >
                $4,351.50
              </Text>
            </VStack>

            <VStack space="2">
              <Text
                fontSize="md"
                fontWeight="medium"
                color="coolGray.500"
                textAlign="center"
              >
                Returns
              </Text>
              <Text
                fontSize="lg"
                fontWeight="medium"
                color="emerald.600"
                textAlign="center"
              >
                14%
              </Text>
            </VStack>
          </HStack>

        </Box>

      </HStack>
    </Box>
  );
}

export default PortfolioBox;
