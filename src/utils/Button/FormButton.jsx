import { Button } from "@chakra-ui/button";

const FormButton = ({ button_Name, button_Color, button_Width }) => {
  return (
    <Button
      color="hsla(255, 80%, 98%, 1)"
      borderRadius="0"
      bgColor={button_Color}
      width={button_Width}
    >
      {button_Name}
    </Button>
  );
};

export default FormButton;
