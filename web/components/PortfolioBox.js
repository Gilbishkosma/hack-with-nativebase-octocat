import React from 'react';
import {
  Text, HStack, Box, FlatList,
} from 'native-base';

function PortfolioBox() {
  const data = [{
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    companyName: 'Company Name',
    investment: 'Investment',
    currentValue: 'Current Value',
    returns: 'Returns',
  }, {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    companyName: 'Aditya Birla Sun Life Flexi Cap- Fund',
    investment: '$50,000',
    currentValue: '$4,351.50',
    returns: '14%',
  }, {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    companyName: 'Aditya Birla Sun Life Flexi Cap- Fund',
    investment: '$50,000',
    currentValue: '$4,351.50',
    returns: '14%',
  }, {
    id: '68694a0f-3da1-431f-bd56-142371e29d72',
    companyName: 'Aditya Birla Sun Life Flexi Cap- Fund',
    investment: '$50,000',
    currentValue: '$4,351.50',
    returns: '14%',
  }, {
    id: '28694a0f-3da1-471f-bd96-142456e29d72',
    companyName: 'Aditya Birla Sun Life Flexi Cap- Fund',
    investment: '$50,000',
    currentValue: '$4,351.50',
    returns: '14%',
  }];
  return (
    <Box
      // bg="coolGray.200"
      py="4"
      px="3"
      borderRadius="5"
      rounded="md"
      width={800}
      ml="auto"
      mr="auto"
      pl="4"
      maxWidth="100%"
      // color="black"
      mb="0.5"
      flex={1}
      flexDirection="row"
    >

      <FlatList
        data={data}
        renderItem={({
          item,
        }) => (
          <Box
            borderWidth="1"
            _dark={{
              borderColor: 'gray.600',
            }}
            borderColor="coolGray.200"
            pl="4"
            pr="5"
            py="4"

          >
            <HStack space={3} justifyContent="space-between">
              <Text
                _dark={{
                  color: 'warmGray.50',
                }}
                color="coolGray.800"
                bold
                // w="300"
              >
                {item.companyName}
              </Text>

              <Text
                _dark={{
                  color: 'warmGray.50',
                }}
                color="coolGray.800"
                bold
              >
                {item.investment}
              </Text>
              <Text
                color="coolGray.600"
                _dark={{
                  color: 'warmGray.200',
                }}
              >
                {item.currentValue}
              </Text>

              <Text
                fontSize="xs"
                _dark={{
                  color: 'warmGray.50',
                }}
                color="coolGray.800"
                alignSelf="flex-start"
              >
                {item.returns}
              </Text>

            </HStack>
          </Box>
        )}
        keyExtractor={(item) => item.id}
      />
    </Box>
  );
}

// function PortfolioBox() {
//   return (
//     <Box
//       bg="coolGray.200"
//       py="4"
//       px="3"
//       borderRadius="5"
//       rounded="md"
//       width={710}
//       ml="auto"
//       mr="auto"
//       pl="4"
//       maxWidth="100%"
//       color="black"
//       mb="0.5"
//       flex={1}
//       flexDirection="row"
//     >
//       <Box p="4" w="20" bg="red.400" h="10">1</Box>
//       <div>2</div>
//       <div>3</div>
//       <div>4</div>

//     </Box>
//   );
// }

export default PortfolioBox;
