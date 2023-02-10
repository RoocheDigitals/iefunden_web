import { Button } from "@chakra-ui/button";

const FormButton = ({
  button_Name,
  button_Color,
  button_Width,
  button_Height,
  onClick,
}) => {
  return (
    <Button
      color="hsla(255, 80%, 98%, 1)"
      borderRadius="0"
      bgColor={button_Color}
      width={button_Width}
      height={button_Height}
      onClick={onClick}
      _hover={{ bgColor: "gray.500" }}
    >
      {button_Name}
    </Button>
  );
};

export default FormButton;
