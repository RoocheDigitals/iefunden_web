import SimpleGridContainer from "../../../utils/Container/SimpleGridContainer";
import FirstGrid from "../../../utils/Container/GridContainers/FirstGrid";
import SecondGrid from "../../../utils/Container/GridContainers/SecondGrid";
import IibForm from "./IibForm";
import WelcomeNote from "../WelcomeNote";

const Iib = () => {
  return (
    <SimpleGridContainer>
      <FirstGrid background_Color="#132885">
        <WelcomeNote platform_Name="IIB Portfolio" />
      </FirstGrid>
      <SecondGrid>
        <IibForm />
      </SecondGrid>
    </SimpleGridContainer>
  );
};

export default Iib;
