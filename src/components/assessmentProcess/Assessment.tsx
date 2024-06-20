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
import ButtonStepsNavigator from "../common/ButtonNavigator";
import DataProcess from "./DataProcess";
import Disclaimer from "./Disclaimer";
import initialAssessmentInputs from "./initialValues/initialAssessmentInputs";
import IAssessmentInputs from "./interface/IAssessmentInputs";
import IDataProcess from "./interface/IDataProcess";
import IRecommendedSolution from "./interface/IRecommendedSolution";
import IRiskAssessment from "./interface/IRiskAssessment";
import ProcessDataFlow from "./ProcessDataFlow";
import ProcessName from "./ProcessName";
import RecommendedSolutions from "./RecommendedSolutions";
import RiskAssessment from "./RiskAssessment";
import dataProcessSchema from "./schema/dataProcessSchema";
import recommendedSolutionSchema from "./schema/recommendedSolution";
import riskAssessmentSchema from "./schema/riskAssessmentSchema";

const currentAssessmentVersion = assessmentVersion;

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
    if (activeStep === stepsComponents.length - 1) {
      handleAssessmentData();
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
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
  const stepsComponents = [
    { label: disclaimerTitle, component: <Disclaimer /> },
    {
      label: processNameTitle,
      component: (
        <ProcessName
          processName={processName}
          onChange={handleProcessName}
          assessmentVersion={currentAssessmentVersion}
        />
      ),
    },
    {
      label: processDescriptionTitle,
      component: (
        <DataProcess initialData={dataProcess} onSubmit={handleDataProcess} />
      ),
    },
    {
      label: riskAssessmentTitle,
      component: (
        <RiskAssessment
          onSubmit={handleRiskAssessments}
          riskAssessments={riskAssessments}
        />
      ),
    },
    {
      label: processDataFlowsTitle,
      component: <ProcessDataFlow onChange={handleDataFlow} file={dataFlow} />,
    },
    {
      label: recommendedSolTitle,
      component: (
        <RecommendedSolutions
          onSubmit={handleRecommendedSolutions}
          recommendedSolutions={recommendedSolutions}
        />
      ),
    },
  ];

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

        <Box sx={{ marginTop: "4vh" }}>
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

export default Assessment;
