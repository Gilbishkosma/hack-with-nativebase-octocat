import React from 'react';
import {
  Box, ScrollView, VStack, HStack, Button, Text, FlatList, Progress, Spacer,
} from 'native-base';

import {
  MaterialCommunityIcons, MaterialIcons, Fontisto, AntDesign,
} from '@expo/vector-icons';
import Navbar from '../components/Navbar';
import PortfolioBox from '../components/PortfolioBox';
import ContentCard from '../components/ContentCard';

function Screen1() {
  const data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      fullName: 'Change password',
      Icon: (
        <MaterialCommunityIcons
          name="form-textbox-password"
          size={35}
          color="#6b7280"
          p="6"
        />
      ),
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      fullName: 'General',
      Icon: (
        <MaterialIcons name="account-balance" size={35} color="#6b7280" p="6" />
      ),
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      fullName: 'Manage Accounts',
      Icon: (
        <MaterialCommunityIcons
          name="account-cog"
          size={35}
          color="#6b7280"
          p="6"
        />
      ),
    },
    {
      id: '68694a0f-3da1-431f-bd56-142371e29d72',
      fullName: 'Language',
      language: 'English',
      Icon: <Fontisto name="language" size={35} p="6" color="#6b7280" />,
    },
    {
      id: '28694a0f-3da1-471f-bd96-142456e29d72',
      fullName: 'Linked Accounts',
      Icon: (
        <MaterialCommunityIcons
          name="target-account"
          size={35}
          color="#6b7280"
          p="6"
        />
      ),
    },
    {
      id: '28694a0f-3da1-471f-bd96-142456e29d72',
      fullName: 'Disable Accounts',
      Icon: (
        <MaterialCommunityIcons
          name="account-off-outline"
          size={35}
          color="#6b7280"
          p="6"
        />
      ),
    },
  ];
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
          <ScrollView
            flex={1}
            p={{
              md: 8,
            }}
            contentContainerStyle={{
              alignItems: 'center',
              flex: 1,
            }}
          >
            <ContentCard title="Mututal Fund">
              <Box
                bg="violet.50"
                height="full"
                alignContent="center"
              >
                <Box bg="white" p="5">
                  <FlatList
                    data={data}
                    renderItem={({ item }) => (
                      <Box
                        _dark={{
                          borderColor: 'gray.600',
                        }}
                        pr="5"
                        py="2"
                      >
                        <HStack space={3} justifyContent="space-between" alignItems="center">
                          {item.Icon}

                          <VStack p="3">
                            <Text
                              fontSize="md"
                              color="coolGray.800"
                            >
                              {item.fullName}
                            </Text>
                          </VStack>
                          <Spacer />
                          <Text
                            fontSize="md"
                            color="coolGray.500"
                          >
                            {item.language}
                          </Text>
                        </HStack>
                      </Box>
                    )}
                    keyExtractor={(item) => item.id}
                  />
                </Box>
                {/* next component */}
                <Box
                  maxW="1016px"
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
                  maxWidth="100%"
                  color="black"
                >
                  <HStack justifyContent="space-between">
                    <Box justifyContent="space-between" flex={0.95}>
                      <VStack space="2">
                        <HStack space="3">
                          <AntDesign name="cloudo" size={27} color="coolGray.500" />
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
                    >
                      Buy Storage
                    </Button>
                  </HStack>
                </Box>
              </Box>
              <PortfolioBox />
            </ContentCard>
          </ScrollView>
        </Box>
      </VStack>
    </>
  );
}

export default Screen1;
