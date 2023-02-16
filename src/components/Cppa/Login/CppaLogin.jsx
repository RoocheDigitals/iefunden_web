import { useState } from "react";
import hideIcon from "../../../assets/hideIcon.png";
import unhideIcon from "../../../assets/unhideIcon.png";
import InputBar from "../../../styles/GlobalComponents/InputBar/InputBar";
import PrimaryButton from "../../../styles/GlobalComponents/Button/PrimaryButton";
import Links from "../../../styles/GlobalComponents/Links/Links";

import { Box, Flex, Image, InputRightElement, Stack } from "@chakra-ui/react";

const CppaLogin = () => {
  const [unhidePassword, setUnhidePassword] = useState(false);

  return (
    <>
      <Flex width="100%" flexDirection="column" alignItems="center" gap="5vh">
        <Stack spacing={3} width="85%">
          <InputBar
            input_Label="Company Name"
            input_Type="text"
            input_Placeholder="Company Name"
          />
          <InputBar
            input_Placeholder="PIN"
            input_Label="PIN"
            input_Type={unhidePassword ? "text" : "password"}
            input_Element={
              <InputRightElement
                marginRight="0.5rem"
                children={
                  unhidePassword ? (
                    <Image
                      cursor="pointer"
                      src={unhideIcon}
                      onClick={() => setUnhidePassword(false)}
                    />
                  ) : (
                    <Image
                      cursor="pointer"
                      src={hideIcon}
                      onClick={() => setUnhidePassword(true)}
                    />
                  )
                }
              />
            }
          />
        </Stack>
        <PrimaryButton button_Name="Log In" button_Width="15rem" />
        <Flex alignItems="center" gap="2rem">
          <Links link_Name="I Dont Have Account" />
          <PrimaryButton button_Name="Sign Up" button_Height="2rem" />
        </Flex>
      </Flex>
    </>
  );
};

export default CppaLogin;
