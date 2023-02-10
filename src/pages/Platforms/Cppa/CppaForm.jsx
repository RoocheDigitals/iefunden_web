import { useState } from "react";

import FormContainer from "../../../utils/Container/FormContainer";
import FormHeader from "../FormHeader";
import SignUpCppa from "./SignUpCppa";
import SignInCppa from "./SignInCppa";
import CppaWaitingList from "./CppaWaitingList";

const CppaForm = () => {
  const [formType, setFormType] = useState("signin");

  return (
    <FormContainer>
      <FormHeader formType={formType} setFormType={setFormType} />
      {formType === "signin" && <SignInCppa />}
      {formType === "signup" && <SignUpCppa setFormType={setFormType} />}
      {formType === "waitinglist" && <CppaWaitingList />}
    </FormContainer>
  );
};

export default CppaForm;
