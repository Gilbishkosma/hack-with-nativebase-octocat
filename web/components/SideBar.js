import React from 'react';
import { Stack } from 'native-base';

function SideBar() {
  return (
    <Stack
      flex={0.2}
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

    />
  );
}

export default SideBar;
