import { useState } from "react";

import FormContainer from "../../../utils/Container/FormContainer";
import FormHeader from "../FormHeader";
import SignUpCppa from "./SignUpCppa";
import SignInCppa from "./SignInCppa";

const CppaForm = () => {
  const [formType, setFormType] = useState("signin");

  return (
    <FormContainer>
      <FormHeader formType={formType} setFormType={setFormType} />
      {formType === "signin" && <SignInCppa />}
      {formType === "signup" && <SignUpCppa />}
    </FormContainer>
  );
};

export default CppaForm;
