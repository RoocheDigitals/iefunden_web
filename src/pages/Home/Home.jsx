import { useNavigate } from "react-router-dom";
import CustomContainer from "../../utils/Container/CustomContainer";
import HomeButton from "../../utils/Button/HomeButton";
import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";

const Home = () => {
  const navigate = useNavigate();

  return (
    <CustomContainer background_Color="linear(to-b, #0D31D1, #132885)">
      <Box color="#fff">
        <Box textAlign="center" maxWidth="18.688rem">
          <Stack spacing="10" mb="12vh">
            <Heading fontSize="3rem">Iefunden</Heading>
            <Stack spacing="1rem">
              <Text fontWeight="700">Welcome</Text>
              <Text lineHeight="1.3">
                Welcome Nunc vulputate libero et velit interdum, ac aliquet odio
                mattis.
              </Text>
            </Stack>
          </Stack>
          <Stack spacing="2.5">
            <HomeButton
              button_Name="C/PPA Platform"
              onClick={() => navigate("cppa")}
            />
            <HomeButton
              button_Name="CSO Wallet"
              onClick={() => navigate("cso")}
            />
            <HomeButton
              button_Name="IIB Portfolio"
              onClick={() => navigate("iib")}
            />
          </Stack>
        </Box>
      </Box>
    </CustomContainer>
  );
};

export default Home;
