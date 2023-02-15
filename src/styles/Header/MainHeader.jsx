import mainLogo from "../../assets/mainLogo.png";
import headerLogo from "../../assets/headerLogo.png";
import hamburgerMenu from "../../assets/hamburgerMenu.png";
import headerLine from "../../assets/headerLine.png";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

const MainHeader = ({ heading_Text }) => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      padding="2rem 4rem"
    >
      <Flex>
        <Image
          cursor="pointer"
          src={hamburgerMenu}
          width="1.5rem"
          height="1.5rem"
        />
      </Flex>

      <Flex flexDirection="column" maxWidth="100%">
        <Text
          color="lightblue"
          fontSize="4xl"
          fontWeight="700"
          textAlign="center"
        >
          {heading_Text}
        </Text>
        <Image
          src={headerLine}
          maxWidth="100%"
          objectFit="contain"
          height="100%"
        />
      </Flex>

      <Image src={headerLogo} />
    </Flex>
  );
};

export default MainHeader;
