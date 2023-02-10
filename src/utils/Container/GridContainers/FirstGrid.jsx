import onefourthCircle from "../../../assets/onefourth-circle.png";
import { Flex, Image } from "@chakra-ui/react";

const FirstGrid = ({ background_Color, children }) => {
  return (
    <Flex
      bgColor={background_Color}
      height="100%"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      <Image
        position="absolute"
        src={onefourthCircle}
        top="0"
        right="0"
        transform="rotate(180deg)"
        opacity="50%"
      />
      {children}
      <Image
        position="absolute"
        src={onefourthCircle}
        bottom="0"
        left="0"
        opacity="50%"
      />
    </Flex>
  );
};

export default FirstGrid;
