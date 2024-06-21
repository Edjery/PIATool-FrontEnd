import {
  Box,
  SelectChangeEvent,
  Step,
  StepLabel,
  Stepper,
} from "@mui/material";
import { useState } from "react";
import { mainContentPrimaryColor } from "../../values/colors";
import {
  assessmentVersion,
  disclaimerTitle,
  processDataFlowsTitle,
  processDescriptionTitle,
  processNameTitle,
  recommendedSolTitle,
  riskAssessmentTitle,
} from "../../values/string";
import DataProcess from "./DataProcess";
import Disclaimer from "./Disclaimer";
import initialAssessmentInputs from "./initialValues/initialAssessmentInputs";
import IAssessmentInputs from "./interface/IAssessmentInputs";
import IDataProcess from "./interface/IDataProcess";
import IRecommendedSolution from "./interface/IRecommendedSolution";
import IRiskAssessment from "./interface/IRiskAssessment";
import IStepsComponents from "./interface/IStepsComponents";
import ProcessDataFlow from "./ProcessDataFlow";
import ProcessName from "./ProcessName";
import RecommendedSolutions from "./RecommendedSolutions";
import RiskAssessment from "./RiskAssessment";
import dataProcessSchema from "./schema/dataProcessSchema";
import recommendedSolutionSchema from "./schema/recommendedSolution";
import riskAssessmentSchema from "./schema/riskAssessmentSchema";

const currentAssessmentVersion = assessmentVersion;
const stepsLabel = [
  disclaimerTitle,
  processNameTitle,
  processDescriptionTitle,
  riskAssessmentTitle,
  processDataFlowsTitle,
  recommendedSolTitle,
];

const Assessment = () => {
  // init
  const [activeStep, setActiveStep] = useState(0);
  const [processName, setProcessName] = useState(
    initialAssessmentInputs.processName
  );
  const [dataProcess, setDataProcess] = useState(
    initialAssessmentInputs.dataProcess
  );
  const [riskAssessments, setRiskAssessments] = useState(
    initialAssessmentInputs.riskAssessments
  );
  const [dataFlow, setDataFlow] = useState(initialAssessmentInputs.dataFlow);
  const [recommendedSolutions, setRecommendedSolutions] = useState(
    initialAssessmentInputs.recommendedSolutions
  );

  // actions
  const handleNext = () => {
    if (activeStep === stepsLabel.length - 1) {
      // handleAssessmentData();
      console.log("finish");
    } else {
      setActiveStep(activeStep + 1);
    }
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleProcessName = (event: SelectChangeEvent) => {
    setProcessName(event.target.value);
  };
  const handleDataProcess = (values: IDataProcess) => {
    setDataProcess(values);
  };
  const handleRiskAssessments = (riskAssessmentList: IRiskAssessment[]) => {
    setRiskAssessments(riskAssessmentList);
  };
  const handleDataFlow = (imageFile: File | null) => {
    setDataFlow(imageFile);
  };
  const handleRecommendedSolutions = (
    recommendedSolutions: IRecommendedSolution[]
  ) => {
    setRecommendedSolutions(recommendedSolutions);
  };
  const validateAssessmentData = (): Boolean => {
    let valid = true;
    if (dataFlow == null) {
      console.log(["Data Flow image is required"]);
      valid = false;
    }
    dataProcessSchema.validate(dataProcess).catch((err) => {
      console.log(err.errors);
      valid = false;
    });
    riskAssessmentSchema
      .validate({ riskAssessments: riskAssessments })
      .catch((err) => {
        console.log(err.errors);
        valid = false;
      });
    recommendedSolutionSchema
      .validate({ recommendedSolutions: recommendedSolutions })
      .catch((err) => {
        console.log(err.errors);
        valid = false;
      });
    return valid;
  };
  const handleAssessmentData = () => {
    if (validateAssessmentData()) {
      const overallAssessmentInputs: IAssessmentInputs = {
        processName: processName,
        piaVersion: currentAssessmentVersion,
        dataProcess: dataProcess,
        riskAssessments: riskAssessments,
        dataFlow: dataFlow,
        recommendedSolutions: recommendedSolutions,
      };
      console.log(overallAssessmentInputs);
    }
  };

  // ang init ng steps
  const stepsComponents: IStepsComponents[] = [
    {
      label: stepsLabel[0],
      component: (
        <Disclaimer
          stepControls={{
            activeStep: activeStep,
            onBack: handleBack,
            onNext: handleNext,
            stepsComponentsLength: stepsLabel.length,
          }}
        />
      ),
    },
    {
      label: stepsLabel[1],
      component: (
        <ProcessName
          processName={processName}
          onChange={handleProcessName}
          assessmentVersion={currentAssessmentVersion}
          stepControls={{
            activeStep: activeStep,
            onBack: handleBack,
            onNext: handleNext,
            stepsComponentsLength: stepsLabel.length,
          }}
        />
      ),
    },
    {
      label: stepsLabel[2],
      component: (
        <DataProcess
          initialData={dataProcess}
          onSubmit={handleDataProcess}
          stepControls={{
            activeStep: activeStep,
            onBack: handleBack,
            onNext: handleNext,
            stepsComponentsLength: stepsLabel.length,
          }}
        />
      ),
    },
    {
      label: stepsLabel[3],
      component: (
        <RiskAssessment
          onSubmit={handleRiskAssessments}
          riskAssessments={riskAssessments}
          stepControls={{
            activeStep: activeStep,
            onBack: handleBack,
            onNext: handleNext,
            stepsComponentsLength: stepsLabel.length,
          }}
        />
      ),
    },
    {
      label: stepsLabel[4],
      component: (
        <ProcessDataFlow
          onChange={handleDataFlow}
          file={dataFlow}
          stepControls={{
            activeStep: activeStep,
            onBack: handleBack,
            onNext: handleNext,
            stepsComponentsLength: stepsLabel.length,
          }}
        />
      ),
    },
    {
      label: stepsLabel[5],
      component: (
        <RecommendedSolutions
          onSubmit={handleRecommendedSolutions}
          recommendedSolutions={recommendedSolutions}
          stepControls={{
            activeStep: activeStep,
            onBack: handleBack,
            onNext: handleNext,
            stepsComponentsLength: stepsLabel.length,
          }}
        />
      ),
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        background: mainContentPrimaryColor,
        padding: "2vh",
        height: "83vh",
        minHeight: "83vh",
        alignItems: "center",
        textAlign: "center",
        overflow: "auto",
      }}
    >
      <Stepper activeStep={activeStep} alternativeLabel>
        {stepsComponents.map((step, index) => (
          <Step key={index}>
            <StepLabel>{step.label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box sx={{ marginTop: "4vh" }}>
        {stepsComponents[activeStep].component}
      </Box>
    </Box>
  );
};

export default Assessment;
