import { useState } from "react";

import hideIcon from "../../../assets/hideIcon.png";
import unhideIcon from "../../../assets/unhideIcon.png";
import InputBar from "../../../styles/GlobalComponents/InputBar/InputBar";
import Links from "../../../styles/GlobalComponents/Links/Links";
import PrimaryButton from "../../../styles/GlobalComponents/Button/PrimaryButton";
import uploadFileIcon from "../../../assets/uploadFileIcon.png";
import { useDropzone } from "react-dropzone";
import "./CppaSignup.css";

import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";

const CppaSignup = () => {
  const [unhidePin, setUnhidePin] = useState(false);

  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
    accept: {
      "image/png": [".png"],
      "image/jpg": [".jpg"],
      "image/webp": [".webp"],
    },
  });

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path}
      {/* - {file.size} bytes */}
    </li>
  ));

  return (
    <>
      <Stack width="100%">
        <InputBar
          input_Label="Company Name"
          input_Type="text"
          input_Placeholder="Company Name"
        />
        <InputBar
          input_Label="Company Address"
          input_Type="text"
          input_Placeholder="Company Address"
        />
        <InputBar
          input_Label="Contact Person"
          input_Type="text"
          input_Placeholder="Company Deligated Person"
        />
        <InputBar
          input_Label="Email"
          input_Type="email"
          input_Placeholder="Email"
        />
        <InputBar
          input_Label="Mobile Number"
          input_Type="number"
          input_Placeholder="Mobile Number"
        />
        <InputBar
          input_Label="Create PIN"
          input_Type={unhidePin ? "text" : "password"}
          input_Placeholder="Create PIN"
          input_Element={
            <InputRightElement
              marginRight="0.5rem"
              children={
                unhidePin ? (
                  <Image
                    cursor="pointer"
                    src={unhideIcon}
                    onClick={() => setUnhidePin(false)}
                  />
                ) : (
                  <Image
                    cursor="pointer"
                    src={hideIcon}
                    onClick={() => setUnhidePin(true)}
                  />
                )
              }
            />
          }
        />
        <FormControl>
          <FormLabel fontSize="1.25rem" fontWeight="700" color="lightblue">
            Upload Logo
          </FormLabel>
          <Flex
            alignItems="center"
            border="1px solid black"
            borderRadius="100px"
            height="2.5rem"
          >
            <Box width="100%" {...getRootProps({ className: "dropzone" })}>
              <Input {...getInputProps()} />
              <Flex justifyContent="space-between" px="1rem">
                <Box overflow="hidden" whiteSpace="nowrap">
                  {files}
                </Box>
                <Image cursor="pointer" src={uploadFileIcon} onClick={open} />
              </Flex>
            </Box>
          </Flex>
        </FormControl>
      </Stack>
      <Stack spacing="1.5rem">
        <Flex alignItems="center" gap="2rem">
          <Links link_Name="Forgot Password" />
          <PrimaryButton button_Name="Sign Up" button_Height="2rem" />
        </Flex>
        <Flex alignItems="center" gap="2rem">
          <Links link_Name="I Already Have Account" />
          <PrimaryButton
            button_Name="Login"
            button_Height="2rem"
            button_Width="5.778rem"
          />
        </Flex>
      </Stack>
    </>
  );
};

export default CppaSignup;
