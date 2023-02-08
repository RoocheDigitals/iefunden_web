import { Flex } from "@chakra-ui/react";

const FirstGrid = ({ background_Color, children }) => {
  return (
    <Flex
      bgColor={background_Color}
      height="100%"
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Flex>
  );
};

export default FirstGrid;
