import InputBar from "../../../styles/GlobalComponents/InputBar/InputBar";
import Links from "../../../styles/GlobalComponents/Links/Links";
import PrimaryButton from "../../../styles/GlobalComponents/Button/PrimaryButton";
import uploadFileIcon from "../../../assets/uploadFileIcon.png";

import { Box, Flex, Image, InputRightElement, Stack } from "@chakra-ui/react";

const CppaSignup = () => {
  return (
    <>
      <Stack>
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
        <InputBar input_Label="Create PIN" input_Type="password" />
        <InputBar
          input_Label="Upload Logo"
          input_Type="file"
          input_Element={
            <InputRightElement
              marginRight="0.5rem"
              children={<Image cursor="pointer" src={uploadFileIcon} />}
            />
          }
        />
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
