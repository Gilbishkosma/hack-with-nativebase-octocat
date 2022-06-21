import React from 'react';
import {
  Box,
  VStack,
  ScrollView,
  Hidden,
  HStack,
  Pressable,
  Icon,
  Text,
  Stack,
} from 'native-base';
import {
  AntDesign,
} from '@expo/vector-icons';
import Navbar from '../components/Navbar';
import SideBar from '../components/SideBar';

function Screen3() {
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
              />

            </VStack>
          </ScrollView>
        </Box>
      </VStack>
    </>
  );
}

export default Screen3;
