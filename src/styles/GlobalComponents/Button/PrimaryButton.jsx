import { Button } from "@chakra-ui/react";

const PrimaryButton = ({ button_Name, button_Width, button_Height }) => {
  return (
    <Button height={button_Height} width={button_Width} bgColor="lightblue">
      {button_Name}
    </Button>
  );
};

export default PrimaryButton;
