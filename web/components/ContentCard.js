import React from 'react';
import {
  HStack,
  Icon,
  Text,

  Pressable,

  VStack,
  Stack,

  Hidden,
} from 'native-base';
import {
  AntDesign,
} from '@expo/vector-icons';
import { useNavigateToHome } from '../hooks';

function ContentCard({ children, title }) {
  const { handleNavigationToHome } = useNavigateToHome();

  return (
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
            {title}
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
          base: 'row',
          md: 'column',
        }}
        space="6"
      >
        {children}
      </Stack>
    </VStack>
  );
}
export default ContentCard;
