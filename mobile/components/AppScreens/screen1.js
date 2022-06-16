import React from "react";
import {
  Text,
  View,
  Box,
  Heading,
  FlatList,
  HStack,
  Avatar,
  VStack,
  Spacer,
  SunIcon,
} from "native-base";

const Screen1 = () => {
  const data = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      fullName: "Aafreen Khan",
      Icon: <SunIcon justifyContent="center" p="5" />,
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      fullName: "Sujitha Mathur",
      Icon: <SunIcon justifyContent="center" p="5" />,
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      fullName: "Anci Barroco",
      Icon: <SunIcon justifyContent="center" p="5" />,
    },
    {
      id: "68694a0f-3da1-431f-bd56-142371e29d72",
      fullName: "Aniket Kumar",
      Icon: <SunIcon justifyContent="center" p="5" />,
    },
    {
      id: "28694a0f-3da1-471f-bd96-142456e29d72",
      fullName: "Kiara",
      language: "English",
      Icon: <SunIcon justifyContent="center" p="5" />,
    },
  ];
  return (
    <Box bg="violet.50" height="full">
      <Box bg="white" p="5">
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Box
            //   borderBottomWidth="1"
              _dark={{
                borderColor: "gray.600",
              }}
            //   borderColor="coolGray.200"
              //   pl="5"
              pr="5"
              py="2"
            >
              <HStack space={3} justifyContent="space-between">
                {item.Icon}

                <VStack p="3">
                  <Text
                    _dark={{
                      color: "warmGray.50",
                    }}
                    color="coolGray.800"
                    bold
                    alignSelf="center"
                  >
                    {item.fullName}
                  </Text>
                </VStack>
                <Spacer />
                <Text
                  fontSize="xs"
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="coolGray.800"
                  alignSelf="center"
                >
                  {item.language}
                </Text>
              </HStack>
            </Box>
          )}
          keyExtractor={(item) => item.id}
        />
      </Box>
      <Text>hloo</Text>
    </Box>
  );
};

export default Screen1;
