import { Flex } from "@chakra-ui/react";

const SecondGrid = ({ children }) => {
  return (
    <Flex
      bgColor="#F8F6FE"
      height="100%"
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Flex>
  );
};

export default SecondGrid;
