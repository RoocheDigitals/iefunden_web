import { useState } from "react";

import FormContainer from "../../../utils/Container/FormContainer";
import FormHeader from "../FormHeader";
import SignInIib from "./SignInIib";
import SignUpIib from "./SignUpIib";

const IibForm = () => {
  const [formType, setFormType] = useState("signin");

  return (
    <FormContainer>
      <FormHeader formType={formType} setFormType={setFormType} />
      {formType === "signin" && <SignInIib />}
      {formType === "signup" && <SignUpIib />}
    </FormContainer>
  );
};

export default IibForm;
