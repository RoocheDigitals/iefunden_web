import { Link as ReachLink } from "react-router-dom";
import { Divider, Flex, Heading, Link, Stack } from "@chakra-ui/react";

const FormHeader = ({ formType, setFormType }) => {
  return (
    <Stack spacing="4vh" marginBottom="2rem">
      <Heading color="hsla(229, 75%, 30%, 1)">ieFundEn</Heading>
      <Flex>
        <Link
          as={ReachLink}
          fontSize="1.25rem"
          style={
            formType === "signin"
              ? { fontWeight: "600", color: "hsla(229, 75%, 30%, 1)" }
              : { fontWeight: "400", color: "hsla(0, 0%, 0%, 1)" }
          }
          onClick={() => setFormType("signin")}
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
          fontSize="1.25rem"
          style={
            formType === "signup"
              ? { fontWeight: "600", color: "hsla(229, 75%, 30%, 1)" }
              : { fontWeight: "400", color: "hsla(0, 0%, 0%, 1)" }
          }
          onClick={() => setFormType("signup")}
        >
          Sign Up
        </Link>
      </Flex>
    </Stack>
  );
};

export default FormHeader;
