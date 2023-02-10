import { Box, Text } from "@chakra-ui/react";
import FormButton from "../../../utils/Button/FormButton";

const CppaWaitingList = () => {
  return (
    <Box maxWidth="17.5rem">
      <Text color="#132885" fontSize="2rem" fontWeight="700" lineHeight="1.3">
        You have been Successfully Added to Waitlist!
      </Text>
      <FormButton button_Name="Go Back" button_Color="hsla(229, 75%, 30%, 1)" />
    </Box>
  );
};

export default CppaWaitingList;
