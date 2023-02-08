import { Button } from "@chakra-ui/button";

const HomeButton = ({ button_Name, button_Color, button_Width, onClick }) => {
  return (
    <Button
      bgColor="hsla(255, 80%, 98%, 1)"
      color="hsla(229, 75%, 30%, 1)"
      borderRadius="0"
      fontWeight="700"
      width={button_Width}
      onClick={onClick}
    >
      {button_Name}
    </Button>
  );
};

export default HomeButton;