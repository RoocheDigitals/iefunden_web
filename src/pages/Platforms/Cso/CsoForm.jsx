import { useState } from "react";

import FormContainer from "../../../utils/Container/FormContainer";
import FormHeader from "../FormHeader";
import SignInCso from "./SignInCso";
import SignUpCso from "./SignUpCso";

const CsoForm = () => {
  const [formType, setFormType] = useState("signin");

  return (
    <FormContainer>
      <FormHeader formType={formType} setFormType={setFormType} />
      {formType === "signin" && <SignInCso />}
      {formType === "signup" && <SignUpCso />}
    </FormContainer>
  );
};

export default CsoForm;
