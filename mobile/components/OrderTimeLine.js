import React from 'react';
import {
  Box, Text, Flex, Icon,
} from 'native-base';
import {
  AntDesign,
  Fontisto,
} from '@expo/vector-icons';
import { timeline } from '../utils';

function TimeLineCard({
  title, info, isChecked, time, isLast,
}) {
  const dashIconNumber = isChecked ? 3 : 2;
  return (
    <Flex flexDirection="row">
      <Flex alignItems="center" justifyContent="center" mr="4">
        <Icon
          size={25}
          as={AntDesign}
          name="checkcircle"
          color={isChecked ? 'primary.800' : 'primary.200'}
          _dark={{
            color: isChecked ? 'primary.500' : 'secondary.400',
          }}
        />
        {!isLast ? [...Array(dashIconNumber).keys()].map((item) => (
          <Icon
            key={item}
            size={25}
            as={Fontisto}
            name="minus-a"
            color={isChecked ? 'primary.800' : 'primary.200'}
            _dark={{
              color: isChecked ? 'primary.500' : 'secondary.400',
            }}
            style={{ transform: [{ rotate: '90deg' }] }}
          />
        )) : <Box mb="6" />}
      </Flex>
      <Box mt="2">
        <Text fontWeight="medium" fontSize="xl">{title}</Text>
        <Text fontSize="lg" color="secondary.500" _dark={{ color: 'secondary.400' }}>{info}</Text>
        {time && <Text fontSize="md" color="secondary.400">{time}</Text>}
      </Box>

    </Flex>
  );
}

function OrderTimeLine() {
  return (
    <Box mt="4">
      {timeline.map((item) => <TimeLineCard key={item.title} {...item} />)}
    </Box>
  );
}

export default OrderTimeLine;
