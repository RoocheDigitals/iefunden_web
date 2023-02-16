import { useNavigate, Outlet } from "react-router-dom";

import MainContainer from "../../styles/GlobalComponents/Containers/MainContainer";
import { Section } from "../../styles/GlobalComponents/Containers/Section";
import PrimaryButton from "../../styles/GlobalComponents/Button/PrimaryButton";
import MainLogo from "../../styles/GlobalComponents/Logo/MainLogo";

import { Stack } from "@chakra-ui/react";

const Cppa = () => {
  const navigate = useNavigate();

  return (
    <>
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
      </Stack>
    </>
  );
};

export default Cppa;
