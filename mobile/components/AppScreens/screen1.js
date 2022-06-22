import React from 'react';
import {
  Text,
  Box,
  FlatList,
  HStack,
  VStack,
  Icon,
  Button,
  Progress,
} from 'native-base';
import {
  AntDesign,
} from '@expo/vector-icons';
import { screen1Data } from '../../utils';
import TextWithIcon from '../TextWithIcon';

function Screen1() {
  return (
    <Box
      bg="violet.50"
      _dark={{ bg: 'secondary.700' }}
      height="full"
      alignContent="center"
    >
      <Box bg="white" _dark={{ bg: 'secondary.800' }} p="5">
        <FlatList
          data={screen1Data}
          renderItem={({ item }) => (
            <TextWithIcon key={item.fullName} Icon={item.Icon} title={item.fullName} />
          )}
          keyExtractor={(item) => item.id}
        />
      </Box>
      {/* next component */}
      <Box
        bg="white"
        _dark={{ bg: 'secondary.800', color: 'white' }}
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
      >
        <HStack justifyContent="space-between">
          <Box justifyContent="space-between" flex={0.95}>
            <VStack space="2">
              <HStack space="3">
                <Icon as={AntDesign} name="cloudo" size={27} color="secondary.500" _dark={{ color: 'white' }} />
                <Text
                  _dark={{
                    color: 'warmGray.50',
                  }}
                  color="coolGray.800"
                  bold
                  alignSelf="center"
                >
                  Storage
                </Text>
              </HStack>
              {/* <HStack /> */}
              <Progress
                bg="coolGray.100"
                _filledTrack={{
                  bg: 'violet.900',
                }}
                _dark={{
                  _filledTrack: {
                    bg: 'primary.700',
                  },
                }}
                size="md"
                mb={3}
                value={55}
              />
            </VStack>
            <Text
              textTransform="uppercase"
              fontSize="sm"
              fontWeight="bold"
              color="coolGray.800"
              _dark={{
                color: 'white',
              }}
            >
              4 gb of 15gb used
            </Text>
          </Box>
          <Button
            size="md"
            mt="auto"
            mb="auto"
            variant="outline"
            borderColor="primary.800"
            _text={{
              color: 'primary.500',
            }}
            _dark={{
              borderColor: 'secondary.400',
              _text: {
                color: 'secondary.400',
              },
            }}
            _pressed={{
              bg: 'secondary.600',
              _light: {
                bg: 'primary.100',
              },
            }}
          >
            Buy Storase
          </Button>
        </HStack>
      </Box>
    </Box>
  );
}

export default Screen1;
