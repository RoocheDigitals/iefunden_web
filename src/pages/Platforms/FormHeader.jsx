import { Link as ReachLink } from "react-router-dom";
import {
  Box,
  Divider,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

const FormHeader = () => {
  return (
    <Stack spacing="4vh" marginBottom="2rem">
      <Heading color="hsla(229, 75%, 30%, 1)">ieFundEn</Heading>
      <Flex>
        <Link
          as={ReachLink}
          fontWeight="400"
          fontSize="1.25rem"
          color="hsla(0, 0%, 0%, 1)"
        >
          Sign In
        </Link>
        <Divider
          orientation="vertical"
          borderColor="hsla(0, 0%, 0%, 1)"
          height="25px"
          mx="1.5rem"
        />
        <Link
          as={ReachLink}
          fontWeight="400"
          fontSize="1.25rem"
          color="hsla(0, 0%, 0%, 1)"
        >
          Sign Up
        </Link>
      </Flex>
    </Stack>
  );
};

export default FormHeader;
