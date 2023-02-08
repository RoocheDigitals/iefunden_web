import { Link as ReachLink } from "react-router-dom";

import FormHeader from "../../pages/Platforms/FormHeader";
import InputBar from "../Input/InputBar";
import FormButton from "../Button/FormButton";
import SignUpCppa from "../../pages/Platforms/Cppa/SignUpCppa";
import SignInCppa from "../../pages/Platforms/Cppa/SignInCppa";

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

const FormContainer = ({ children }) => {
  return (
    <Box maxWidth="21.875rem" flex="1">
      {children}
    </Box>
  );
};

export default FormContainer;
