import React from 'react';
import {
  Box, VStack, HStack, Button, Text, FlatList, Progress, Spacer, Icon,
} from 'native-base';

import {
  AntDesign,
} from '@expo/vector-icons';
import Navbar from '../components/Navbar';
import ContentCard from '../components/ContentCard';
import { screen1Data } from '../utils';
import SideBar from '../components/SideBar';

function Screen1() {
  return (
    <>
      <Navbar />
      <VStack
        flex={1}
        _light={{
          bg: 'primary.50',
        }}
        _dark={{
          bg: 'secondary.700',
        }}
      >
        <Box
          flex={1}
          flexDirection={{
            base: 'column',
            md: 'row',
          }}
          _light={{
            borderTopColor: 'secondary.200',
          }}
          _dark={{
            bg: 'secondary.700',
            borderTopColor: 'secondary.700',
          }}
        >
          <SideBar />
          <Box
            flex={1}
            flexDirection={{
              base: 'column',
              md: 'row',
            }}
          >
            <ContentCard title="Settings" hideBG>
              <Box
                bg="violet.50"
                height="full"
                alignContent="center"
              >
                <Box bg="white" _dark={{ bg: 'secondary.800' }} p="5">
                  <FlatList
                    data={screen1Data}
                    renderItem={({ item }) => (
                      <Box
                        _dark={{
                          borderColor: 'gray.600',
                        }}
                        pr="5"
                        py="2"
                      >
                        <HStack space={3} justifyContent="space-between" alignItems="center">
                          <Text color="#6b7280" _dark={{ color: 'white' }}>{item.Icon}</Text>
                          <VStack p="3">
                            <Text
                              fontSize="md"
                              color="coolGray.800"
                              _dark={{ color: 'white' }}
                            >
                              {item.fullName}
                            </Text>
                          </VStack>
                          <Spacer />
                          <Text
                            fontSize="md"
                            color="coolGray.500"
                            _dark={{ color: 'coolGray.300' }}
                          >
                            {item.language}
                          </Text>
                        </HStack>
                      </Box>
                    )}
                    keyExtractor={(item) => item.id}
                  />
                </Box>
              </Box>
              <Box
                maxWidth="1016px"
                width="100%"
                bg="white"
                py="4"
                px="3"
                borderRadius="5"
                rounded="md"
                ml="auto"
                mr="auto"
                pl="4"
                mt="5"
                color="black"
                _dark={{ bg: 'secondary.800' }}
              >
                <HStack justifyContent="space-between">
                  <Box justifyContent="space-between" flex={0.95}>
                    <VStack space="2">
                      <HStack space="3">
                        <Icon as={AntDesign} name="cloudo" size={27} color="coolGray.500" _dark={{ color: 'white' }} />
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
                      _dark={{ color: 'white' }}
                    >
                      4 gb of 15gb used
                    </Text>
                  </Box>
                  <Button
                    size="md"
                    mt="auto"
                    mb="auto"
                    variant="outline"
                    colorScheme="secondary"
                    borderColor="violet.800"
                    _text={{
                      color: 'violet.800',
                    }}
                    _dark={{
                      _text: {
                        color: 'secondary.400',
                      },
                      borderColor: 'secondary.400',
                    }}
                  >
                    Buy Storage
                  </Button>
                </HStack>
              </Box>
            </ContentCard>

          </Box>

        </Box>
      </VStack>
    </>
  );
}

export default Screen1;
