import linkLine from "../../../assets/linkLine.png";
import { Link as ReachLink } from "react-router-dom";
import { Box, Image, Link } from "@chakra-ui/react";

const Links = ({ link_Name, link_To }) => {
  return (
    <Box>
      <Link
        as={ReachLink}
        to={link_To}
        color="lightblue"
        fontSize="1.1rem"
        fontWeight="700"
      >
        {link_Name}
      </Link>
      <Image src={linkLine} />
    </Box>
  );
};

export default Links;
