import FormButton from "../Button/FormButton";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  InputGroup,
} from "@chakra-ui/react";
import "./UploadBar.css";

const UploadBar = ({
  input_Label,
  input_Type,
  input_Width,
  button_Name,
  button_Color,
  button_Width,
  button_Height,
}) => {
  return (
    <FormControl>
      <FormLabel color="hsla(0, 0%, 0%, 1)">{input_Label}</FormLabel>
      <InputGroup id="upload__bar" justifyContent="space-between">
        <Input
          bgColor="#EAEEFF"
          borderRadius="0"
          height="1.813rem"
          width={input_Width}
          type={input_Type}
        />
        <FormButton
          button_Name={button_Name}
          button_Color={button_Color}
          button_Width={button_Width}
          button_Height={button_Height}
        />
      </InputGroup>
    </FormControl>
  );
};

export default UploadBar;
