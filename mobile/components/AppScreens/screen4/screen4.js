import React from 'react';
import {
  ScrollView, HStack, Heading,
} from 'native-base';
import PortfolioBox from './portfolioBox';
import BoxContainer from './boxContainer';

function Screen4() {
  return (
    <ScrollView bg="white" _dark={{ bg: 'secondary.800' }}>
      <HStack space={4} justifyContent="center" p="5">
        <BoxContainer
          amount="$15303.00"
          value="Total Invested"
          color="primary.800"
          darkColor="primary.500"
        />
        <BoxContainer
          amount="$45303.00"
          value="14% Return"
          color="emerald.800"
          darkColor="emerald.500"
        />
      </HStack>
      <Heading size="lg" fontSize={16} px="2" mt="2" pl="5">
        Portfolio Details
      </Heading>
      <PortfolioBox />
      <PortfolioBox />
      <PortfolioBox />
      <PortfolioBox />
    </ScrollView>
  );
}

export default Screen4;
