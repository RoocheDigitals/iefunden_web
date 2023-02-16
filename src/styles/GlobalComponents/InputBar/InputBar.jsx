import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

const InputBar = ({
  form_Label,
  input_Type,
  input_Width,
  input_Addon,
  placeholder_Content,
}) => {
  return (
    <FormControl>
      <FormLabel color="lightblue">{form_Label}</FormLabel>
      <InputGroup>
        <Input
          border="1px solid black"
          borderRadius="100px"
          type={input_Type}
          placeholder={placeholder_Content}
          width={input_Width}
        />
        <InputRightElement children={input_Addon} />
      </InputGroup>
    </FormControl>
  );
};

export default InputBar;
