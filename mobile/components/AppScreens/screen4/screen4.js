import React from 'react';
import {
  ScrollView, HStack, Heading,
} from 'native-base';
import PortfolioBox from './portfolioBox';
import BoxContainer from './boxContainer';

function Screen4() {
  return (
    <ScrollView>
      <HStack space={4} justifyContent="center" p="5">
        <BoxContainer text1="$15303.00" text2="Total Invested" color="violet.800" />
        <BoxContainer text1="$45303.00" text2="14% Return" color="emerald.800" />
      </HStack>
      <Heading size="lg" fontSize={16} p="2" pl="5">
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
