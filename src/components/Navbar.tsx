import { Badge, Button, Flex, Image, Spacer } from "@chakra-ui/react";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <Flex bg="gray.100" alignItems="center">
      <Image
        boxSize="70px"
        objectFit="contain"
        src="/logo.png"
        alt="Dan Abramov"
      />
      <Spacer />
      <Flex alignItems="center">
        <Button leftIcon={<IoCartOutline />} variant="ghost" size="lg">
          <Badge colorScheme="red">5</Badge>
        </Button>

        <Button colorScheme="teal" variant="ghost">
          Sign In
        </Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;
