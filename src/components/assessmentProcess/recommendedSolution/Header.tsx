import { Box } from "@mui/material";
import {
  recommendedSolDescription,
  recommendedSolTitle,
} from "../../../values/string";
import CardContainerDescription from "../../common/CardContainerDescription";
import CardContainerTitle from "../../common/CardContainerTitle";

const Header = () => {
  return (
    <Box sx={{ mb: "2vh" }}>
      <CardContainerTitle title={recommendedSolTitle} />
      <CardContainerDescription description={recommendedSolDescription} />
    </Box>
  );
};

export default Header;
