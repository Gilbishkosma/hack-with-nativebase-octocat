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
  Pressable,
  Button,
  Progress,
} from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Screen1 = () => {
  const data = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      fullName: "Change password",
      Icon: (
        <MaterialCommunityIcons
          name="form-textbox-password"
          size={40}
          color="black"
          p="6"
        />
      ),
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      fullName: "General",
      Icon: (
        <MaterialIcons name="account-balance" size={40} color="black" p="6" />
      ),
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      fullName: "Manage Accounts",
      Icon: (
        <MaterialCommunityIcons
          name="account-cog"
          size={40}
          color="black"
          p="6"
        />
      ),
    },
    {
      id: "68694a0f-3da1-431f-bd56-142371e29d72",
      fullName: "Language",
      language: "English",
      Icon: <Fontisto name="language" size={40} p="6" color="black" />,
    },
    {
      id: "28694a0f-3da1-471f-bd96-142456e29d72",
      fullName: "Linked Accounts",
      Icon: (
        <MaterialCommunityIcons
          name="target-account"
          size={40}
          color="black"
          p="6"
        />
      ),
    },
    {
      id: "28694a0f-3da1-471f-bd96-142456e29d72",
      fullName: "Disable Accounts",
      Icon: (
        <MaterialCommunityIcons
          name="account-off-outline"
          size={40}
          color="black"
          p="6"
        />
      ),
    },
  ];
  return (
    <Box
      bg="violet.50"
      height="full"
      alignContent="center"
      fontFamily="SF Pro"
      fontWeight={500}
     
    >
      <Box bg="white" p="5">
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Box
              _dark={{
                borderColor: "gray.600",
              }}
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
      {/* next component */}
      <Box
        bg="white"
        py="4"
        px="3"
        borderRadius="5"
        rounded="md"
        width={358}
        ml="auto"
        mr="auto"
        pl="4"
        mt="5"
        maxWidth="100%"
        color="black"
        // flex="center"
      >
        <HStack justifyContent="space-between">
          <Box justifyContent="space-between" flex={0.95}>
            <VStack space="2">
              <HStack space="3">
                <AntDesign name="cloudo" size={27} color="black" />
                <Text
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="coolGray.800"
                  bold
                  alignSelf="center"
                >
                  Storage
                </Text>
              </HStack>
              {/* <HStack /> */}
              <Progress
                bg="coolGray.100"
                _filledTrack={{
                  bg: "violet.900",
                }}
                size="md"
                mb={3}
                value={55}
              />
            </VStack>
            <Text
              textTransform="uppercase"
              fontSize="sm"
              fontWeight="bold"
              color="black"
            >
              4 gb of 15gb used
            </Text>
          </Box>
          <Button
            size="md"
            // width={120}
            // height={50}
            mt="auto"
            mb="auto"
            variant="outline"
            colorScheme="secondary"
            borderColor="violet.900"
            _text={{
              color: "violet.900",
            }}
          >
            Buy Storage
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default Screen1;
