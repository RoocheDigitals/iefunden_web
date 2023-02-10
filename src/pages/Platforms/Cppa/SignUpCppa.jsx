import { Link as ReachLink } from "react-router-dom";

import FormHeader from "../FormHeader";
import InputBar from "../../../utils/Input/InputBar";
import UploadBar from "../../../utils/Input/UploadBar";
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

const SignUpCppa = ({ setFormType }) => {
  return (
    <Box>
      <Stack spacing={1} marginBottom="1rem">
        <InputBar input_Label="Company Name" input_Type="text" />
        <InputBar input_Label="Company Address" input_Type="text" />
        <InputBar input_Label="Contact Person" input_Type="text" />
        <InputBar input_Label="Email" input_Type="email" />
        <InputBar input_Label="Mobile No." input_Type="number" />
        <InputBar input_Label="Create PIN" input_Type="text" />
        <UploadBar
          input_Label="Upload Logo"
          input_Type="file"
          input_Width="65%"
          button_Name="Browse"
          button_Color="hsla(229, 75%, 30%, 1)"
          button_Width="25%"
          button_Height="29px"
        />
      </Stack>
      <FormButton
        button_Name="Sign Up"
        button_Color="#132885"
        button_Width="100%"
        onClick={() => setFormType("waitinglist")}
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
