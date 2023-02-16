import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

const InputBar = ({
  input_Label,
  input_Type,
  input_Width,
  input_Element,
  input_Placeholder,
}) => {
  return (
    <FormControl>
      <FormLabel fontSize="1.25rem" fontWeight="700" color="lightblue">
        {input_Label}
      </FormLabel>
      <InputGroup>
        <Input
          border="1px solid black"
          borderRadius="100px"
          _hover={{ borderColor: "none" }}
          type={input_Type}
          placeholder={input_Placeholder}
          width={input_Width}
        />
        {input_Element}
      </InputGroup>
    </FormControl>
  );
};

export default InputBar;
