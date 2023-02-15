import MainHeader from "../../Header/MainHeader";
import { Box, Flex } from "@chakra-ui/react";

const MainContainer = ({ children, heading_Text }) => {
  return (
    <Flex minHeight="100vh" flexDirection="column">
      <MainHeader heading_Text={heading_Text} />
      <Flex
        flex="1"
        bgColor="white"
        justifyContent="center"
        // pt="24"
        // px="24"
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default MainContainer;
