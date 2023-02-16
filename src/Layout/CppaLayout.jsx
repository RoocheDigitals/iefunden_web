import MainContainer from "../styles/GlobalComponents/Containers/MainContainer";
import { Section } from "../styles/GlobalComponents/Containers/Section";
import { Outlet } from "react-router-dom";

const CppaLayout = () => {
  return (
    <MainContainer heading_Text="Welcome to C/PPA Platform">
      <Section>
        <Outlet />
      </Section>
    </MainContainer>
  );
};

export default CppaLayout;
