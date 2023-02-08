import onefourthCircle from "../../assets/onefourth-circle.png";
import circle from "../../assets/circle1.png";
import { Flex, Image } from "@chakra-ui/react";

const CustomContainer = ({ children, background_Color }) => {
  return (
    <Flex
      paddingTop="20vh"
      alignItems="center"
      flexDirection="column"
      height="100vh"
      bgGradient={background_Color}
    >
      <Image
        position="absolute"
        top="0%"
        right="0%"
        transform="rotate(180deg)"
        src={onefourthCircle}
        opacity="50%"
      />
      {children}
      <Image
        position="absolute"
        bottom="-0.5rem"
        left="-14rem"
        src={circle}
        opacity="50%"
      />
    </Flex>
  );
};

export default CustomContainer;
