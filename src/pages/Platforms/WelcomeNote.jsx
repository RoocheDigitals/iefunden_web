import { Heading, Stack, Text } from "@chakra-ui/react";

const WelcomeNote = ({ platform_Name }) => {
  return (
    <Stack color="hsla(255, 80%, 98%, 1)" maxWidth="30rem" spacing="6vh">
      <Heading fontSize="2.5rem" fontWeight="700">
        Welcome to <br /> {platform_Name}
      </Heading>
      <Text fontWeight="400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
        molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
        fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
        elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
        lectus. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
        egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
      </Text>
    </Stack>
  );
};

export default WelcomeNote;
