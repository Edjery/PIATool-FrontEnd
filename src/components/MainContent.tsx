import { Box, Step, StepLabel, Stepper } from "@mui/material";
import { useState } from "react";
import { mainContentPrimaryColor } from "../values/colors";
import {
  disclaimerTitle,
  processDataFlowsTitle,
  processDescriptionTitle,
  processNameTitle,
  recommendedSolTitle,
  riskAssessmentTitle,
} from "../values/string";
import DataProcess from "./assessmentProcess/DataProcess";
import Disclaimer from "./assessmentProcess/Disclaimer";
import ProcessDataFlow from "./assessmentProcess/ProcessDataFlow";
import ProcessName from "./assessmentProcess/ProcessName";
import RecommendedSolutions from "./assessmentProcess/RecommendedSolutions";
import RiskAssessment from "./assessmentProcess/RiskAssessment";
import ButtonStepsNavigator from "./common/ButtonNavigator";

const MainContent = () => {
  const [activeStep, setActiveStep] = useState(0);

  const stepsComponents = [
    { label: disclaimerTitle, component: <Disclaimer /> },
    { label: processNameTitle, component: <ProcessName /> },
    { label: processDescriptionTitle, component: <DataProcess /> },
    { label: riskAssessmentTitle, component: <RiskAssessment /> },
    { label: processDataFlowsTitle, component: <ProcessDataFlow /> },
    { label: recommendedSolTitle, component: <RecommendedSolutions /> },
  ];

  const handleNext = () => {
    if (activeStep === stepsComponents.length - 1) {
      console.log("finish");
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          background: mainContentPrimaryColor,
          padding: "2vh",
          minHeight: "73vh",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Stepper activeStep={activeStep} alternativeLabel>
          {stepsComponents.map((step, index) => (
            <Step key={index}>
              <StepLabel>{step.label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Box sx={{ marginTop: "2rem" }}>
          {stepsComponents[activeStep].component}
        </Box>
      </Box>
      <ButtonStepsNavigator
        activeStep={activeStep}
        onNext={handleNext}
        onBack={handleBack}
        stepsComponentsLength={stepsComponents.length}
      />
    </Box>
  );
};

export default MainContent;
