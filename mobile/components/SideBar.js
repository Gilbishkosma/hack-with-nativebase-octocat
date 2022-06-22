import React from 'react';
import {
  Stack, Image, Flex, Text, Icon, Divider, Box, FlatList, Spacer, Hidden,
} from 'native-base';
import {
  MaterialIcons,
} from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { screen3Data } from '../utils';
import TextWithIcon from './TextWithIcon';

function SideBar() {
  return (
    <Hidden till="lg">
      <Stack
        flex={0.25}
        py={{
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
      >
        {/* Profile image and it's data */}
        <Flex alignItems="center" width="full">
          <Image
            size={150}
            borderRadius={100}
            alt="Profile Pic"
            source={require('../assets/profile.png')}
          />
          <Text mt="2" fontWeight="bold" fontSize="2xl">
            Jane Doe
            <Pressable>
              <Icon
                ml="2"
                size="5"
                as={MaterialIcons}
                name="edit"
                color="secondary.800"
                _dark={{
                  color: 'white',
                }}
              />
            </Pressable>
          </Text>
          <Text fontSize="md" _light={{ color: 'secondary.400' }}>janedoe2@mydomain.com</Text>
        </Flex>
        <Divider mt="7" />

        {/* Settings */}
        <Box
          bg="white"
          _dark={{
            bg: 'secondary.800',
          }}
          px="6"
        >
          <FlatList
            data={screen3Data}
            renderItem={({ item }) => (
              <TextWithIcon key={item.id} Icon={item.Icon} title={item.fullName} />
            )}
            keyExtractor={(item) => item.id}
          />
        </Box>
        <Spacer />
        <Divider />
        <Box px="6" mt="1">
          <TextWithIcon
            Icon={(
              <Icon
                size={25}
                as={MaterialIcons}
                name="logout"
                color="secondary.800"
                _dark={{
                  color: 'white',
                }}
              />
          )}
            title="Logout"
          />
        </Box>

      </Stack>
    </Hidden>
  );
}

export default SideBar;
