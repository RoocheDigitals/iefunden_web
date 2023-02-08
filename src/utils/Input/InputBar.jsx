import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";

const InputBar = ({ input_Label, input_Type, input_Width }) => {
  return (
    <FormControl>
      <FormLabel color="hsla(0, 0%, 0%, 1)">{input_Label}</FormLabel>
      <Input
        bgColor="#EAEEFF"
        borderRadius="0"
        height="1.813rem"
        width={input_Width}
        type={input_Type}
      />
    </FormControl>
  );
};

export default InputBar;
