import { Flex } from "@chakra-ui/react";

export const Section = ({ children }) => {
  return (
    <Flex
      maxWidth="22rem"
      flex="1"
      flexDirection="column"
      alignItems="center"
      marginTop="7vh"
      gap="3rem"
    >
      {children}
    </Flex>
  );
};
