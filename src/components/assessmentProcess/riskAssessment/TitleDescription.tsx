import { Box } from "@mui/material";
import {
  riskAssessmentDescription,
  riskAssessmentTitle,
} from "../../../values/string";
import CardContainerDescription from "../../common/CardContainerDescription";
import CardContainerTitle from "../../common/CardContainerTitle";

const TitleDescription = () => {
  return (
    <Box>
      <CardContainerTitle title={riskAssessmentTitle} />
      <CardContainerDescription description={riskAssessmentDescription} />
    </Box>
  );
};

export default TitleDescription;
