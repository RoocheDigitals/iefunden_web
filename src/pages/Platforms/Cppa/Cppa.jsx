import { Box } from "@chakra-ui/react";
import SimpleGridContainer from "../../Container/SimpleGridContainer";
import FirstGrid from "../../Container/GridContainers/FirstGrid";
import SecondGrid from "../../Container/GridContainers/SecondGrid";

const Cppa = () => {
  return (
    <SimpleGridContainer>
      <FirstGrid></FirstGrid>
      <SecondGrid></SecondGrid>
    </SimpleGridContainer>
  );
};

export default Cppa;
