import onefourthCircle from "../../assets/onefourth-circle.png";
import circle from "../../assets/circle1.png";
import { Box, Flex, Image } from "@chakra-ui/react";

const CustomContainer = ({ children, background_Color }) => {
  return (
    <Flex
      paddingTop="20vh"
      alignItems="center"
      flexDirection="column"
      height="100vh"
      bgGradient={background_Color}
      position="relative"
      overflow="hidden"
    >
      <Image
        position="absolute"
        top="0"
        right="0"
        transform="rotate(180deg)"
        opacity="50%"
        src={onefourthCircle}
      />

      {children}

      <Image
        position="absolute"
        bottom="-10px"
        left="-220px"
        src={circle}
        opacity="50%"
      />
    </Flex>
  );
};

export default CustomContainer;
