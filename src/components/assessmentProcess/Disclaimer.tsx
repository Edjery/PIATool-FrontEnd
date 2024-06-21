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
import ImageBox from "../common/ImageBox";
import AlertIcon from "../../assets/icon/alert-triangle.svg";

const Paragraph = ({ paragraph }: { paragraph: string }) => (
  <Typography variant="body1" sx={{ mt: 2 }}>
    {paragraph}
  </Typography>
);

const Disclaimer = ({ stepControls }: { stepControls: IStepControls }) => {
  return (
    <CardContainer variant="md">
      <Box textAlign={"center"}>
        <ImageBox img={AlertIcon} height="15vh" />
      </Box>
      <Typography variant="h4">
        <strong>{disclaimerTitle}</strong>
      </Typography>
      <Box textAlign={"justify"}>
        <Typography variant="body1">
          {disclaimerParagraphA1}{" "}
          <Link href={urlNpcPia} target="_blank">
            <strong>{disclaimerLinkPia}</strong>
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
