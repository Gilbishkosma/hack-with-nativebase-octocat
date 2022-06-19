import React from 'react';
import {
  Button,
} from 'native-base';

function CTAButton({ title }) {
  return (
    <Button
      flex={1}
      h="100%"
      py={3}
      borderRadius="4"
      _dark={{
        bg: 'primary.700',
      }}
      _light={{
        bg: 'primary.900',
      }}
      _text={{
        fontSize: 'md',
        fontWeight: 'semibold',
      }}
      _hover={{
        _dark: {
          bg: 'primary.800',
        },
      }}
    >
      {title}
    </Button>
  );
}

export default CTAButton;
