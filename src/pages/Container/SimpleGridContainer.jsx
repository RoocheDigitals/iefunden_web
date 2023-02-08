import { SimpleGrid } from "@chakra-ui/react";

const SimpleGridContainer = ({ children }) => {
  return (
    <SimpleGrid minHeight="100vh" columns={2} spacing={0}>
      {children}
    </SimpleGrid>
  );
};

export default SimpleGridContainer;
