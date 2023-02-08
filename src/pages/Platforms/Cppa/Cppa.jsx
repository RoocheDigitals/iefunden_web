import SimpleGridContainer from "../../../utils/Container/SimpleGridContainer";
import FirstGrid from "../../../utils/Container/GridContainers/FirstGrid";
import SecondGrid from "../../../utils/Container/GridContainers/SecondGrid";
import CppaForm from "./CppaForm";
import WelcomeNote from "../WelcomeNote";

const Cppa = () => {
  return (
    <SimpleGridContainer>
      <FirstGrid background_Color="#132885">
        <WelcomeNote platform_Name="C/PPA Platform" />
      </FirstGrid>
      <SecondGrid>
        <CppaForm />
      </SecondGrid>
    </SimpleGridContainer>
  );
};

export default Cppa;
