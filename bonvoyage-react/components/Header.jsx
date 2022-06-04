import {
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text
} from "@chakra-ui/react";
import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { Rating } from "@material-ui/lab"
import { BiChevronDown, BiHotel, BiMapAlt, BiMapPin, BiRestaurant, BiSearch, BiStar } from "react-icons/bi";
const Header = ({ setType, setRatings, setCoordinates }) => {
  return (
    <Flex
      position={"absolute"}
      top={0}
      left={0}
      width="full"
      px={4}
      py={2}
      zIndex={101}
    >
      <Flex>
        {/* <Autocomplete> */}
        <InputGroup width={"35vw"} shadow="lg">
          <InputRightElement
            pointerEvents={"none"}
            children={
              <BiSearch color="grey" fontSize={20}>
                {" "}
              </BiSearch>
            }
          />
          <Input
            type={"text"}
            placeholder="Enter your vacation destination and Bonvoy!"
            variant={"filled"}
            fontSize={18}
            bg={"white"}
            color={"grey.700"}
            _hover={{ bg: "whiteAlpha.800" }}
            _focus={{ bg: "whiteAlpha.800" }}
            _placeholder={{ color: "gray.700" }}
          />
        </InputGroup>
        {/* </Autocomplete> */}
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            px={4}
            py={2}
            bg={"white"}
            rounded={"full"}
            ml={4}
            shadow={"lg"}
            cursor={"pointer"}
            _hover={{bg : "gray.100"}}
            transition = {'ease-in-out'}
            transitionDuration ={'0.3s'}
          >
            <Menu>
              <BiStar fontSize={25} />
              <MenuButton mx={2} transition="all of 0.2s" borderRadius={"md"}>
                Choose Ratings
              </MenuButton>
              
              <MenuList>
                <MenuItem display={'flex'} alignItems={'center'} justifyContent={'space-around'} onClick={() => setRatings ("")}>
                <Text fontSize={20} fontWeight={500} color={'grey.700'}>All Ratings</Text>
                </MenuItem>

                <MenuItem display={'flex'} alignItems={'center'} justifyContent={'space-around'} onClick={() => setRatings ("")}>
                <Text fontSize={20} fontWeight={500} color={'orange.500'}>2.0</Text>
                <Rating size="small" value={2} readOnly/>
                </MenuItem>

                <MenuItem display={'flex'} alignItems={'center'} justifyContent={'space-around'} onClick={() => setRatings ("")}>
                <Text fontSize={20} fontWeight={500} color={'orange.500'}>3.0</Text>
                <Rating size="small" value={3} readOnly/>
                </MenuItem>

                <MenuItem display={'flex'} alignItems={'center'} justifyContent={'space-around'} onClick={() => setRatings ("")}>
                <Text fontSize={20} fontWeight={500} color={'orange.500'}>4.0</Text>
                <Rating size="small" value={4} readOnly/>
                </MenuItem>
               
                <MenuItem display={'flex'} alignItems={'center'} justifyContent={'space-around'} onClick={() => setRatings ("")}>
                <Text fontSize={20} fontWeight={500} color={'orange.500'}>4.5</Text>
                <Rating size="small" value={5} readOnly/>
                </MenuItem>
              </MenuList>
            </Menu>
            <BiChevronDown fontSize={25}/>
          </Flex>


          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            px={4}
            py={2}
            bg={"white"}
            rounded={"full"}
            ml={4}
            shadow={"lg"}
            cursor={"pointer"}
            _hover={{bg : "gray.100"}}
            transition = {'ease-in-out'}
            transitionDuration ={'0.3s'}
            onClick = {() => setType('restaurants')}
          >
            {/* Restaurants */}
            <BiRestaurant  fontSize={25}/>
            <Text ml={3} fontSize={16} fontWeight={500}>
              Restaurants
            </Text>
          </Flex>


          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            px={4}
            py={2}
            bg={"white"}
            rounded={"full"}
            ml={4}
            shadow={"lg"}
            cursor={"pointer"}
            _hover={{bg : "gray.100"}}
            transition = {'ease-in-out'}
            transitionDuration ={'0.3s'}
            onClick = {() => setType('hotels')}
          >
            {/* Hotels */}
            <BiHotel  fontSize={25}/>
            <Text ml={3} fontSize={16} fontWeight={500}>
              Hotels
            </Text>
          </Flex>

          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            px={4}
            py={2}
            bg={"white"}
            rounded={"full"}
            ml={4}
            shadow={"lg"}
            cursor={"pointer"}
            _hover={{bg : "gray.100"}}
            transition = {'ease-in-out'}
            transitionDuration ={'0.3s'}
            onClick = {() => setType('hotels')}
          >
           
            {/* Attractions */}
            <BiMapAlt  fontSize={25}/>
            <Text ml={3} fontSize={16} fontWeight={500}>
              Attractions
            </Text>
          </Flex>




        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
