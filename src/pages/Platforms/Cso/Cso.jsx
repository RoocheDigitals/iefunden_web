import SimpleGridContainer from "../../../utils/Container/SimpleGridContainer";
import FirstGrid from "../../../utils/Container/GridContainers/FirstGrid";
import SecondGrid from "../../../utils/Container/GridContainers/SecondGrid";
import CsoForm from "./CsoForm";
import WelcomeNote from "../WelcomeNote";

const Cso = () => {
  return (
    <SimpleGridContainer>
      <FirstGrid background_Color="#132885">
        <WelcomeNote platform_Name="CSO Wallet" />
      </FirstGrid>
      <SecondGrid>
        <CsoForm />
      </SecondGrid>
    </SimpleGridContainer>
  );
};

export default Cso;
