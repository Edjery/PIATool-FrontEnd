import { Box, Link, Typography } from "@mui/material";
import {
  disclaimerLinkPia,
  disclaimerParagraphA1,
  disclaimerParagraphA2,
  disclaimerParagraphB,
  disclaimerParagraphC,
  disclaimerTitle,
} from "../../values/string";
import { urlNpcPia } from "../../values/values";
import ButtonStepsNavigator from "../common/ButtonNavigator";
import CardContainer from "../common/CardContainer";
import IStepControls from "./interface/IStepControls";

const Paragraph = ({ paragraph }: { paragraph: string }) => (
  <Typography variant="body1" sx={{ mt: 2 }}>
    {paragraph}
  </Typography>
);

const Disclaimer = ({ stepControls }: { stepControls: IStepControls }) => {
  return (
    <CardContainer variant="md">
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        {disclaimerTitle}
      </Typography>
      <Box sx={{ textAlign: "justify", mt: 2 }}>
        <Typography variant="body1">
          {disclaimerParagraphA1}{" "}
          <Link href={urlNpcPia} target="_blank" sx={{ fontWeight: "bold" }}>
            {disclaimerLinkPia}
          </Link>{" "}
          {disclaimerParagraphA2}
        </Typography>
        <Paragraph paragraph={disclaimerParagraphB} />
        <Paragraph paragraph={disclaimerParagraphC} />
      </Box>
      <ButtonStepsNavigator
        activeStep={stepControls.activeStep}
        onNext={stepControls.onNext}
        onBack={stepControls.onBack}
        stepsComponentsLength={stepControls.stepsComponentsLength}
      />
    </CardContainer>
  );
};

export default Disclaimer;
