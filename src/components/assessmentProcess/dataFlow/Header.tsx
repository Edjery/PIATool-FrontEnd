import { Box, Link } from "@mui/material";
import {
  linkDiagram,
  processDataFlowDescription,
  processDataFlowInstructionsA,
  processDataFlowInstructionsB,
  processDataFlowsTitle,
} from "../../../values/string";
import { urlDiagram } from "../../../values/values";
import CardContainerDescription from "../../common/CardContainerDescription";
import CardContainerTitle from "../../common/CardContainerTitle";

const Header = () => {
  return (
    <Box sx={{ mb: "2vh" }}>
      <CardContainerTitle title={processDataFlowsTitle} />
      <CardContainerDescription description={processDataFlowDescription} />

      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <CardContainerDescription description={processDataFlowInstructionsA} />
        <Link
          href={urlDiagram}
          target="_blank"
          sx={{ fontWeight: "bold", mx: "0.5vh" }}
        >
          {linkDiagram}
        </Link>
        <CardContainerDescription description={processDataFlowInstructionsB} />
      </Box>
    </Box>
  );
};

export default Header;
