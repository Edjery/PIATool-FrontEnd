import {
  Box,
  SelectChangeEvent,
  Step,
  StepLabel,
  Stepper,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { processNameList } from "../../values/list";
import {
  assessmentVersion,
  disclaimerTitle,
  finalStep,
  processDataFlowsTitle,
  processDescriptionTitle,
  processNameTitle,
  recommendedSolTitle,
  riskAssessmentTitle,
  sampleName,
  stampSampleDate,
  uagcName,
} from "../../values/string";
import { bypassAssessmentValidation } from "../../values/values";
import IAssessmentReportDetails from "../document/interface/IAssessmentReportDetails";
import DataProcess from "../pageComponents/assessmentProcess/DataProcess";
import Disclaimer from "../pageComponents/assessmentProcess/Disclaimer";
import FinalProcess from "../pageComponents/assessmentProcess/FinalProcess";
import initialAssessmentInputs from "../pageComponents/assessmentProcess/initialValues/initialAssessmentInputs";
import IAssessmentInputs from "../pageComponents/assessmentProcess/interface/IAssessmentInputs";
import IDataProcess from "../pageComponents/assessmentProcess/interface/IDataProcess";
import IRecommendedSolution from "../pageComponents/assessmentProcess/interface/IRecommendedSolution";
import IRiskAssessment from "../pageComponents/assessmentProcess/interface/IRiskAssessment";
import IStepsComponents from "../pageComponents/assessmentProcess/interface/IStepsComponents";
import ProcessDataFlow from "../pageComponents/assessmentProcess/ProcessDataFlow";
import ProcessName from "../pageComponents/assessmentProcess/ProcessName";
import RecommendedSolutions from "../pageComponents/assessmentProcess/RecommendedSolutions";
import RiskAssessment from "../pageComponents/assessmentProcess/RiskAssessment";
import dataProcessSchema from "../pageComponents/assessmentProcess/schema/dataProcessSchema";
import recommendedSolutionSchema from "../pageComponents/assessmentProcess/schema/recommendedSolution";
import riskAssessmentSchema from "../pageComponents/assessmentProcess/schema/riskAssessmentSchema";

const currentAssessmentVersion = assessmentVersion;
const stepsLabel = [
  disclaimerTitle,
  processNameTitle,
  processDescriptionTitle,
  riskAssessmentTitle,
  processDataFlowsTitle,
  recommendedSolTitle,
  finalStep,
];

const Assessment = () => {
  // init
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [processName, setProcessName] = useState<string>(
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
  const [overallAssessmentInputs, setOverallAssessmentInputs] =
    useState<IAssessmentInputs>({
      processName: processName,
      piaVersion: currentAssessmentVersion,
      dataProcess: dataProcess,
      riskAssessments: riskAssessments,
      dataFlow: dataFlow,
      recommendedSolutions: recommendedSolutions,
    });

  // backend update needed: get this data from current user, user department, validations from db if exist and current version
  const reportDetails: IAssessmentReportDetails = {
    author: sampleName,
    department: uagcName,
    validated: false,
    dateValidated: stampSampleDate,
    version: assessmentVersion,
  };

  // actions
  const handleNext = () => {
    if (activeStep === stepsLabel.length - 2) {
      if (validateAssessmentData() || bypassAssessmentValidation) {
        handleAssessmentData();
        setActiveStep(activeStep + 1);
      }
    } else if (activeStep === stepsLabel.length - 1) {
      navigate("/");
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
      .catch((err: any) => {
        console.log(err.errors);
        valid = false;
      });
    recommendedSolutionSchema
      .validate({ recommendedSolutions: recommendedSolutions })
      .catch((err: any) => {
        console.log(err.errors);
        valid = false;
      });
    return valid;
  };
  const handleAssessmentData = () => {
    const overallAssessmentInputs: IAssessmentInputs = {
      processName: processNameList[parseInt(processName)].name,
      piaVersion: currentAssessmentVersion,
      dataProcess: dataProcess,
      riskAssessments: riskAssessments,
      dataFlow: dataFlow,
      recommendedSolutions: recommendedSolutions,
    };
    setOverallAssessmentInputs(overallAssessmentInputs);
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
    {
      label: stepsLabel[6],
      component: (
        <FinalProcess
          assessmentInputs={overallAssessmentInputs}
          reportDetails={reportDetails}
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
  );
};

export default Assessment;
