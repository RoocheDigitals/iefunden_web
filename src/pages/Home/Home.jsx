import { useNavigate } from "react-router-dom";
import CustomContainer from "../Container/CustomContainer";

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
            <Button
              borderRadius="none"
              bgColor="hsla(255, 80%, 98%, 1)"
              color="hsla(229, 75%, 30%, 1)"
              fontWeight="700"
              onClick={() => navigate("cppa")}
            >
              C/PPA Platform
            </Button>
            <Button
              borderRadius="none"
              bgColor="hsla(255, 80%, 98%, 1)"
              color="hsla(229, 75%, 30%, 1)"
              fontWeight="700"
            >
              CSO Wallet
            </Button>
            <Button
              borderRadius="none"
              bgColor="hsla(255, 80%, 98%, 1)"
              color="hsla(229, 75%, 30%, 1)"
              fontWeight="700"
            >
              IIB Portfolio
            </Button>
          </Stack>
        </Box>
      </Box>
    </CustomContainer>
  );
};

export default Home;
