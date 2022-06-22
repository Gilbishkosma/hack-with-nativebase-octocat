import React from 'react';
import {
  HStack,
  Icon,
  Text,
  ScrollView,
  Pressable,

  VStack,
  Stack,

  Hidden,
} from 'native-base';
import {
  AntDesign,
} from '@expo/vector-icons';
import { useNavigateToHome } from '../hooks';

function ContentCard({ children, title, hideBG }) {
  const { handleNavigationToHome } = useNavigateToHome();

  return (
    <ScrollView
      style={{ flex: '0 0 100%' }}
      p={{
        md: 8,
      }}
      contentContainerStyle={{
        alignItems: 'center',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '1016px',
        width: '100%',
      }}
    >
      <VStack>
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
            bg: hideBG ? 'primary.50' : 'white',
          }}
          _dark={{
            borderColor: 'secondary.700',
            bg: hideBG ? 'secondary.700' : 'secondary.800',
          }}
          borderWidth={hideBG ? 0 : 1}
          borderColor="#E5E7EB"
          borderRadius={8}
          direction="{{
            base: 'row',
            md: 'column',
          }}"
          space="6"
          height="100%"
        >
          {children}
        </Stack>
      </VStack>
    </ScrollView>
  );
}
export default ContentCard;
