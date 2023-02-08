import { Link as ReachLink } from "react-router-dom";

import FormHeader from "../FormHeader";
import InputBar from "../../../utils/Input/InputBar";
import FormButton from "../../../utils/Button/FormButton";

import {
  Box,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

const SignInCppa = () => {
  return (
    <Box>
      <Stack spacing={1} marginBottom="1rem">
        <InputBar input_Label="Company Name" input_Type="text" />
        <InputBar input_Label="PIN" input_Type="text" />
      </Stack>
      <FormButton
        button_Name="Sign In"
        button_Color="#132885"
        button_Width="100%"
      />
      <Box textAlign="center" my="1rem">
        <Link as={ReachLink} fontWeight="600" color="hsla(229, 88%, 44%, 1)">
          Forgot Password
        </Link>
        <Text color="hsla(0, 0%, 0%, 1)" fontWeight="600">
          I don't have account{" "}
          <Link as={ReachLink} color="hsla(229, 88%, 44%, 1)">
            Sign Up
          </Link>
        </Text>
      </Box>
    </Box>
  );
};

export default SignInCppa;
