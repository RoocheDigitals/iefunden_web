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

const SignUpCppa = () => {
  return (
    <Box>
      <Stack spacing={1} marginBottom="1rem">
        <InputBar input_Label="Company Name" input_Type="text" />
        <InputBar input_Label="Company Address" input_Type="text" />
        <InputBar input_Label="Contact Person" input_Type="text" />
        <InputBar input_Label="Email" input_Type="email" />
        <InputBar input_Label="Mobile No." input_Type="number" />
        <InputBar input_Label="Create PIN" input_Type="text" />
        <InputBar input_Label="Upload Logo" input_Type="text" />
      </Stack>
      <FormButton
        button_Name="Sign Up"
        button_Color="#132885"
        button_Width="100%"
      />
      <Box textAlign="center" my="1rem">
        <Text color="hsla(0, 0%, 0%, 1)" fontWeight="600">
          I already have an Account{" "}
          <Link as={ReachLink} color="hsla(229, 88%, 44%, 1)">
            Sign In
          </Link>
        </Text>
      </Box>
    </Box>
  );
};

export default SignUpCppa;
