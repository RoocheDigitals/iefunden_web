import { useState } from "react";
import { useNavigate } from "react-router-dom";
import mainLogo from "../../assets/mainLogo.png";
import { Section } from "./HomeStyles";
import PrimaryButton from "../../styles/GlobalComponents/Button/PrimaryButton";
import MainContainer from "../../styles/GlobalComponents/Containers/MainContainer";

import { Box, Image, Link, Stack } from "@chakra-ui/react";

const Home = () => {
  const navigate = useNavigate();
  const [state, setState] = useState("getStart");

  return (
    <MainContainer heading_Text="Welcome to ieFundEn">
      <Section>
        <Image src={mainLogo} boxSize="12rem" />
        <Stack spacing={3}>
          {state === "getStart" && (
            <PrimaryButton
              button_Name="Get Start"
              button_Width="16rem"
              button_Margin="1rem auto"
              onClick={() => setState("platformOptions")}
            />
          )}

          {state === "platformOptions" && (
            <>
              <PrimaryButton
                button_Name="C/PPA Platform"
                button_Width="16rem"
                onClick={() => navigate("cppa")}
              />
              <PrimaryButton
                button_Name="CSO Wallet"
                button_Width="16rem"
                onClick={() => navigate("cso")}
              />
              <PrimaryButton
                button_Name="IIB Portfolio"
                button_Width="16rem"
                onClick={() => navigate("iib")}
              />
            </>
          )}
        </Stack>
      </Section>
    </MainContainer>
  );
};

export default Home;
