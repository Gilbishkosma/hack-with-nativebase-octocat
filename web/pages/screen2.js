import React from 'react';
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  ScrollView,
  Pressable,
  Divider,
  Button,
  Stack,
  Link,
  Hidden,
} from 'native-base';
import {
  AntDesign,
} from '@expo/vector-icons';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import CTAButton from '../components/CTAButton';
import { useNavigateToHome } from '../hooks';
import { reviews, categories } from '../utils';
import ReviewCard from '../components/ReviewCard';

function TabCard({ setTabName, title, tabName }) {
  return (
    <Pressable
      onPress={() => {
        setTabName(title);
      }}
    >
      <Text
        fontSize="16"
        fontWeight="medium"
        letterSpacing="0.4"
        _light={{
          color:
          tabName === title
            ? 'primary.900'
            : 'secondary.400',
        }}
        _dark={{
          color:
          tabName === title
            ? 'secondary.50'
            : 'secondary.400',
        }}
      >
        {title}
      </Text>
      {tabName === title && (
      <Box width="100%" py="1">
        <Divider bg="primary.900" />
      </Box>
      )}
    </Pressable>
  );
}

function Screen2() {
  const [tabName, setTabName] = React.useState('Description');
  const { handleNavigationToHome } = useNavigateToHome();
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
            <VStack maxW="1016px" flex={1} width="100%">
              <Hidden till="md">
                <HStack mb="4" space={2}>
                  <Pressable>
                    <Icon
                      size="6"
                      as={AntDesign}
                      name="arrowleft"
                      onClick={handleNavigationToHome}
                      _light={{
                        color: 'secondary.800',
                      }}
                      _dark={{
                        color: 'secondary.50',
                      }}
                    />
                  </Pressable>
                  <Text
                    fontSize="lg"
                    _dark={{
                      color: 'secondary.50',
                    }}
                    _light={{
                      color: 'secondary.800',
                    }}
                  >
                    Body Suit
                  </Text>
                </HStack>
              </Hidden>

              <Stack
                flex={1}
                p={{
                  md: '8',
                }}
                _light={{
                  bg: 'white',
                }}
                _dark={{
                  borderColor: 'secondary.700',
                  bg: 'secondary.800',
                }}
                borderWidth={1}
                borderColor="#E5E7EB"
                borderRadius={8}
                direction={{
                  base: 'column',
                  md: 'row',
                }}
                space="6"
              >
                <Box
                  p="2"
                  bg="primary.100"
                  borderRadius="md"
                  alignItems="center"
                  w={{
                    base: '100%',
                    md: '57%',
                  }}
                  h={{
                    base: '40%',
                    md: 'auto',
                  }}
                  pr={{
                    base: '2',
                    md: '4',
                  }}
                  justifyContent="center"
                >
                  <Image
                    layout="fill"
                    alt="Alternate Text"
                    src={require('../static/images/child_pic.png')}
                  />
                </Box>
                <ScrollView showsVerticalScrollIndicator={false}>
                  <Box
                    flex={1}
                    px={{
                      base: '4',
                    }}
                  >
                    <VStack space={1}>
                      <HStack
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Text
                          fontSize="lg"
                          _light={{
                            color: 'secondary.800',
                          }}
                          _dark={{
                            color: 'secondary.50',
                          }}
                        >
                          Body Suit
                        </Text>
                        <HStack alignItems="center" space="1">
                          <Icon
                            size="4"
                            name="star"
                            as={AntDesign}
                            color="amber.400"
                          />
                          <Text
                            fontSize="md"
                            _light={{
                              color: 'secondary.800',
                            }}
                            _dark={{
                              color: 'secondary.50',
                            }}
                          >
                            4.9
                          </Text>
                          <Text
                            fontSize="sm"
                            fontWeight="medium"
                            _light={{
                              color: 'secondary.400',
                            }}
                            _dark={{
                              color: 'secondary.300',
                            }}
                          >
                            (120)
                          </Text>
                        </HStack>
                      </HStack>
                      <Text
                        fontSize="sm"
                        fontWeight="medium"
                        color="secondary.400"
                      >
                        Mother care
                      </Text>
                      <Text
                        fontSize="xl"
                        fontWeight="medium"
                        _light={{
                          color: 'secondary.800',
                        }}
                        _dark={{
                          color: 'secondary.50',
                        }}
                      >
                        ???500
                      </Text>
                    </VStack>

                    <HStack space="2" mt="5" alignItems="center">
                      <Text
                        fontSize="sm"
                        fontWeight="medium"
                        _dark={{
                          color: 'secondary.50',
                        }}
                        _light={{
                          color: 'secondary.800',
                        }}
                      >
                        Select Size
                      </Text>
                      <Text
                        fontSize="sm"
                        fontWeight="medium"
                        color="secondary.400"
                      >
                        (Age Group)
                      </Text>
                      <Link
                        ml="auto"
                        _text={{
                          textDecoration: 'none',
                        }}
                        _light={{
                          _text: {
                            color: 'primary.900',
                            fontSize: 'sm',
                            fontWeight: 'medium',
                          },
                        }}
                        _dark={{
                          _text: {
                            color: 'primary.500',
                            fontSize: 'sm',
                            fontWeight: 'medium',
                          },
                        }}
                      >
                        Size Chart
                      </Link>
                    </HStack>
                    <ScrollView
                      horizontal
                      showsHorizontalScrollIndicator={false}
                    >
                      <Button.Group space="2" mt={3} alignItems="center">
                        {categories.map((item) => (
                          <Button
                            py="4"
                            px="5"
                            borderRadius="4"
                            variant="subtle"
                            key={item.category}
                            _text={{
                              _dark: {
                                color: 'secondary.50',
                              },
                              _light: {
                                color: 'secondary.800',
                              },
                              fontWeight: 'normal',
                            }}
                            _light={{
                              bg: 'primary.50',
                            }}
                            _dark={{
                              bg: 'secondary.700',
                            }}
                            _hover={{
                              _dark: {
                                bg: 'secondary.600',
                              },
                            }}
                          >
                            {item.category}
                          </Button>
                        ))}
                      </Button.Group>
                    </ScrollView>
                    <CTAButton title="Add to Cart" base="none" md="flex" />
                    <HStack mt="8" space="5">
                      <TabCard title="Description" tabName={tabName} setTabName={setTabName} />
                      <TabCard title="Reviews" tabName={tabName} setTabName={setTabName} />
                    </HStack>
                    {tabName === 'Description' ? (
                      <Text
                        mt="3"
                        fontSize="sm"
                        lineHeight="lg"
                        fontWeight="medium"
                        letterSpacing="0.3"
                        _light={{
                          color: 'secondary.800',
                        }}
                        _dark={{
                          color: 'secondary.50',
                        }}
                      >
                        Yellow bodysuit, has a round neck with envelope detail
                        along the shoulder, short sleeves and snap button
                        closures along the crotch.Your Body suit has a round
                        neck with detail along the shoulder,short sleeves and
                        snap button closer along the front.
                      </Text>
                    ) : (
                      reviews.map((item) => (
                        <ReviewCard {...item} key={item.id} />
                      ))
                    )}
                    <CTAButton title="Continue" base="flex" md="none" />
                  </Box>
                </ScrollView>
              </Stack>
            </VStack>
          </ScrollView>
        </Box>
      </VStack>
    </>
  );
}

export default Screen2;
