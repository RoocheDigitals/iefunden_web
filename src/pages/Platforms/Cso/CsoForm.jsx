import FormContainer from "../../../utils/Container/FormContainer";
import FormHeader from "../FormHeader";
import SignInCso from "./SignInCso";
import SignUpCso from "./SignUpCso";

const CsoForm = () => {
  return (
    <FormContainer>
      <FormHeader />
      {/* <SignUpCso /> */}
      <SignInCso />
    </FormContainer>
  );
};

export default CsoForm;
