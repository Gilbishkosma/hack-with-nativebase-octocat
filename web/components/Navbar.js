import React from 'react';
import {
  Box,
  HStack,
  Text,
  Avatar,
  Input,
  Pressable,
  Divider,
  IconButton,
  Hidden,
  Menu,
  Icon,
  useColorMode,
} from 'native-base';
import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  Ionicons,
} from '@expo/vector-icons';
import Image from 'next/image';
import { useNavigateToHome } from '../hooks';

function Navbar() {
  const { colorMode } = useColorMode();
  const { handleNavigationToHome } = useNavigateToHome();

  return (
    <Box
      px={{
        base: '4',
        md: '8',
      }}
      pt={{
        base: '4',
        md: '3',
      }}
      pb={{
        base: '5',
        md: '3',
      }}
      borderBottomWidth={{
        md: '1',
      }}
      borderColor="secondary.200"
      _dark={{
        bg: 'secondary.900',
        borderColor: 'secondary.700',
      }}
      _light={{
        bg: {
          base: 'primary.900',
          md: 'white',
        },
        borderColor: 'secondary.200',
      }}
    >
      {/* Mobile header */}
      <Hidden from="md">
        <HStack space="2" justifyContent="space-between">
          <HStack space="2" alignItems="center">
            <IconButton
              variant="ghost"
              colorScheme="light"
              icon={(
                <Icon
                  onClick={handleNavigationToHome}
                  size="6"
                  as={AntDesign}
                  name="arrowleft"
                  color="secondary.50"
                />
            )}
            />
            <Text color="secondary.50" fontSize="lg">
              Body Suit
            </Text>
          </HStack>
        </HStack>
      </Hidden>
      {/* Desktop header */}
      <Hidden till="md">
        <HStack alignItems="center" justifyContent="space-between">
          <HStack space="8" alignItems="center">
            <IconButton
              variant="ghost"
              colorScheme="light"
              icon={(
                <Icon
                  size="6"
                  name="menu-sharp"
                  onClick={handleNavigationToHome}
                  as={Ionicons}
                  _light={{
                    color: 'secondary.800',
                  }}
                  _dark={{
                    color: 'secondary.50',
                  }}
                />
            )}
            />

            {colorMode === 'light' ? (
              <Image
                h="10"
                w="56"
                alt="NativeBase Startup+"
                onClick={handleNavigationToHome}
                src={require('../static/images/header_logo_light.png')}
              />
            ) : (
              <Image
                h="10"
                w="56"
                alt="NativeBase Startup+"
                onClick={handleNavigationToHome}
                src={require('../static/images/header_logo_dark.png')}
              />
            )}
          </HStack>
          <HStack space="8" alignItems="center">
            <Input
              px="4"
              w="30%"
              size="sm"
              placeholder="Search"
              InputLeftElement={(
                <Icon
                  px="2"
                  size="4"
                  name="search"
                  as={FontAwesome}
                  _light={{
                    color: 'secondary.400',
                  }}
                  _dark={{
                    color: 'secondary.100',
                  }}
                />
            )}
            />

            <HStack space="5" alignItems="center">
              <IconButton
                icon={(
                  <Icon
                    size="6"
                    _dark={{
                      color: 'secondary.50',
                    }}
                    _light={{
                      color: 'secondary.400',
                    }}
                    as={Entypo}
                    name="share"
                  />
              )}
              />
              <IconButton
                icon={(
                  <Icon
                    size="6"
                    name="heart"
                    as={EvilIcons}
                    _dark={{
                      color: 'secondary.50',
                    }}
                    _light={{
                      color: 'secondary.400',
                    }}
                  />
              )}
              />
              <IconButton
                icon={(
                  <Icon
                    size="6"
                    _dark={{
                      color: 'secondary.50',
                    }}
                    _light={{
                      color: 'secondary.400',
                    }}
                    as={Feather}
                    name="shopping-cart"
                  />
              )}
              />
            </HStack>

            <Menu
              closeOnSelect={false}
              w="190"
              onOpen={() => {}}
              onClose={() => {}}
              trigger={(triggerProps) => (
                <Pressable {...triggerProps}>
                  <Avatar
                    w="8"
                    h="8"
                    borderWidth="2"
                    _dark={{
                      borderColor: 'primary.700',
                    }}
                    source={{
                      uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    }}
                  />
                </Pressable>
              )}
            >
              <Menu.Group title="Profile">
                <Menu.Item>Account</Menu.Item>
                <Menu.Item>Billing</Menu.Item>
                <Menu.Item>Security</Menu.Item>
              </Menu.Group>
              <Divider mt="3" w="100%" />
              <Menu.Group title="Shortcuts">
                <Menu.Item>Settings</Menu.Item>
                <Menu.Item>Logout</Menu.Item>
              </Menu.Group>
            </Menu>
          </HStack>
        </HStack>
      </Hidden>
    </Box>
  );
}

export default Navbar;
