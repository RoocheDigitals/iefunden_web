import mainLogo from "../../assets/mainLogo.png";
import { useNavigate } from "react-router-dom";
import { Box, Heading, Stack, Text } from "@chakra-ui/react";

import MainContainer from "../../styles/GlobalComponents/Containers/MainContainer";

const Home = () => {
  const navigate = useNavigate();

  return <MainContainer heading_Text="Welcome to ieFundEn"></MainContainer>;
};

export default Home;
