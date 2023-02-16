import { useNavigate, Outlet } from "react-router-dom";

import MainContainer from "../../styles/GlobalComponents/Containers/MainContainer";
import { Section } from "../../styles/GlobalComponents/Containers/Section";
import PrimaryButton from "../../styles/GlobalComponents/Button/PrimaryButton";
import MainLogo from "../../styles/GlobalComponents/Logo/MainLogo";

import { Stack } from "@chakra-ui/react";

const Cppa = () => {
  const navigate = useNavigate();

  return (
    <MainContainer heading_Text="Welcome to C/PPA Platform">
      <Section>
        <MainLogo />
        <Stack spacing={3}>
          <PrimaryButton
            button_Name="Sign Up"
            button_Width="16rem"
            onClick={() => navigate("signup")}
          />
          <PrimaryButton
            button_Name="Log In"
            button_Width="16rem"
            onClick={() => navigate("login")}
          />
          <Outlet />
        </Stack>
      </Section>
    </MainContainer>
  );
};

export default Cppa;
