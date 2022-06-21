import React from 'react';
import {
  Box, ScrollView, VStack, HStack,
} from 'native-base';

import Navbar from '../components/Navbar';
import PortfolioBox from '../components/PortfolioBox';
import ContentCard from '../components/ContentCard';
import BoxContainer from '../components/BoxContainer';

function Screen4() {
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
            <ContentCard title="Mututal Fund">
              <HStack flexDirection="row" justifyContent="center" p="5">
                <BoxContainer
                  text1="$15303.00"
                  text2="Total Invested"
                  color="violet.800"
                />
                <BoxContainer
                  text1="$45303.00"
                  text2="14% Return"
                  color="emerald.800"
                />
              </HStack>
              <PortfolioBox />
            </ContentCard>
          </ScrollView>
        </Box>
      </VStack>
    </>
  );
}

export default Screen4;
