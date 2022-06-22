import React from 'react';
import {
  Box,
  VStack,
  Text,
  Flex,
  Image,
  Spacer,
} from 'native-base';
import Navbar from '../components/Navbar';
import SideBar from '../components/SideBar';
import ContentCard from '../components/ContentCard';
import OrderTimeLine from '../components/OrderTimeLine';

const img = require('../static/images/cart.png');

function ItemCard() {
  return (
    <Flex bg="secondary.100" _dark={{ bg: 'secondary.700' }} gap="4" borderRadius="sm" p="4" flexDirection="row">
      <Box>
        <Image
          size="xl"
          alt="Item pic"
          borderRadius="sm"
          source={{
            uri: img.default.src,
          }}
        />
      </Box>
      <Box>
        <Text color="black" _dark={{ color: 'white' }} fontWeight="bold" fontSize="xl">Sweater Dress</Text>
        <Text color="secondary.400" fontWeight="bold" fontSize="sm">Girl Self Design</Text>
        <Spacer />
        <Text color="black" _dark={{ color: 'white' }} fontWeight="bold" fontSize="lg">₹1,199</Text>
      </Box>
    </Flex>
  );
}

function Screen3() {
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
          <SideBar />
          <Box
            flex={1}
            flexDirection={{
              base: 'column',
              md: 'row',
            }}
          >
            <ContentCard title="Track Order">
              <ItemCard />
              <OrderTimeLine />
            </ContentCard>
          </Box>

        </Box>
      </VStack>
    </>
  );
}

export default Screen3;
