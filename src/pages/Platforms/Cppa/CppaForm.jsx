import FormContainer from "../../../utils/Container/FormContainer";
import FormHeader from "../FormHeader";
import SignUpCppa from "./SignUpCppa";
import SignInCppa from "./SignInCppa";

const CppaForm = () => {
  return (
    <FormContainer>
      <FormHeader />
      {/* <SignUpCppa /> */}
      <SignInCppa />
    </FormContainer>
  );
};

export default CppaForm;
