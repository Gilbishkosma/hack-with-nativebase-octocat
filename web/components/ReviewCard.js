import React from 'react';
import {
  HStack,
  Icon,
  Text,
  VStack,
  Avatar,
} from 'native-base';
import {
  AntDesign,
} from '@expo/vector-icons';

function ReviewCard({
  imageUrl, name, time, review,
}) {
  return (
    <VStack my="3" px="4">
      <HStack justifyContent="space-between">
        <HStack space="3">
          <Avatar
            source={{
              uri: imageUrl,
            }}
            height="9"
            width="9"
          />
          <VStack space="1">
            <Text
              fontSize="sm"
              fontWeight="semibold"
              _dark={{
                color: 'secondary.50',
              }}
              _light={{
                color: 'secondary.800',
              }}
            >
              {name}
            </Text>
            <HStack space="1">
              <Icon
                size="4"
                name="star"
                as={AntDesign}
                color="amber.400"
              />
            </HStack>
          </VStack>
        </HStack>
        <Text
          fontSize="sm"
          _light={{
            color: 'secondary.500',
          }}
          _dark={{
            color: 'secondary.300',
          }}
        >
          {time}
        </Text>
      </HStack>
      <Text
        alignItems="center"
        lineHeight="lg"
        mt="4"
        _light={{
          color: 'secondary.500',
        }}
        _dark={{
          color: 'secondary.300',
        }}
        fontSize="md"
      >
        {review}
      </Text>
    </VStack>
  );
}

export default ReviewCard;
