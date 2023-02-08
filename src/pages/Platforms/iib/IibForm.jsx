import FormContainer from "../../../utils/Container/FormContainer";
import FormHeader from "../FormHeader";
import SignInIib from "./SignInIib";
import SignUpIib from "./SignUpIib";

const IibForm = () => {
  return (
    <FormContainer>
      <FormHeader />
      {/* <SignUpIib /> */}
      <SignInIib />
    </FormContainer>
  );
};

export default IibForm;
