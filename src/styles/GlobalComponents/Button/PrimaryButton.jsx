import { Button } from "@chakra-ui/react";

const PrimaryButton = ({
  button_Name,
  button_Margin,
  button_Width,
  button_Height,
  onClick,
}) => {
  return (
    <Button
      color="white"
      height={button_Height}
      width={button_Width}
      margin={button_Margin}
      bgColor="lightblue"
      borderRadius="100px"
      onClick={onClick}
    >
      {button_Name}
    </Button>
  );
};

export default PrimaryButton;
