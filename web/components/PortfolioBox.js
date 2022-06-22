import React from 'react';
import {
  Text, HStack, Box, FlatList,
} from 'native-base';
import { screen4data } from '../utils';

function PortfolioBox() {
  return (
    <Box
      // bg="coolGray.200"
      py="4"
      px="3"
      borderRadius="5"
      rounded="md"
      width={800}
      ml="auto"
      mr="auto"
      pl="4"
      maxWidth="100%"
      // color="black"
      mb="0.5"
      flex={1}
      flexDirection="row"
    >

      <FlatList
        data={screen4data}
        renderItem={({
          item,
        }) => (
          <Box
            borderWidth="1"
            _dark={{
              borderColor: 'gray.600',
            }}
            borderColor="coolGray.200"
            pl="4"
            pr="5"
            py="4"

          >
            <HStack space={3} justifyContent="space-between">
              <Text
                _dark={{
                  color: 'warmGray.50',
                }}
                color="secondary.800"
                bold
              >
                {item.companyName}
              </Text>

              <Text
                _dark={{
                  color: 'warmGray.50',
                }}
                color="secondary.800"
                bold
              >
                {item.investment}
              </Text>
              <Text
                _dark={{
                  color: 'warmGray.200',
                }}
                color="secondary.800"
                bold
              >
                {item.currentValue}
              </Text>

              <Text
                _dark={{
                  color: 'emerald.400',
                }}
                color="emerald.800"
                bold
                alignSelf="flex-start"
              >
                {item.returns}
              </Text>

            </HStack>
          </Box>
        )}
        keyExtractor={(item) => item.id}
      />
    </Box>
  );
}

export default PortfolioBox;
