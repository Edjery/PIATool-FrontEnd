import { Box, Link, Typography } from "@mui/material";
import {
  linkDiagram,
  processDataFlowDescription,
  processDataFlowInstructionsA,
  processDataFlowInstructionsB,
  processDataFlowsTitle,
} from "../../../values/string";
import { urlDiagram } from "../../../values/values";

const TitleDescription = () => {
  return (
    <Box sx={{ mb: "2vh" }}>
      <Typography variant="h6" sx={{ textAlign: "left", fontWeight: "bold" }}>
        {processDataFlowsTitle}
      </Typography>
      <Typography variant="body1" sx={{ textAlign: "justify" }}>
        {processDataFlowDescription}
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Typography variant="body1" sx={{ textAlign: "justify" }}>
          {processDataFlowInstructionsA}
        </Typography>
        <Link
          href={urlDiagram}
          target="_blank"
          sx={{ fontWeight: "bold", mx: "0.5vh" }}
        >
          {linkDiagram}
        </Link>
        <Typography variant="body1" sx={{ textAlign: "justify" }}>
          {processDataFlowInstructionsB}
        </Typography>
      </Box>
    </Box>
  );
};

export default TitleDescription;
