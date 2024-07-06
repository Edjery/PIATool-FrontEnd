import {
  Box,
  SelectChangeEvent,
  Step,
  StepLabel,
  Stepper,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { processNameList, questionSets } from "../../values/list";
import {
  disclaimerTitle,
  finalStep,
  processDataFlowsTitle,
  processDescriptionTitle,
  processNameTitle,
  recommendedSolTitle,
  riskAssessmentTitle,
} from "../../values/string";
import { bypassAssessmentValidation } from "../../values/values";
import DataProcess from "../pageComponents/assessmentProcess/DataProcess";
import Disclaimer from "../pageComponents/assessmentProcess/Disclaimer";
import FinalProcess from "../pageComponents/assessmentProcess/FinalProcess";
import initialAssessment from "../pageComponents/assessmentProcess/initialValues/initialAssessment";
import sampleAssessmentInputs from "../pageComponents/assessmentProcess/initialValues/sampleAssessmentInputs";
import IAssessment from "../pageComponents/assessmentProcess/interface/IAssessment";
import IDataProcess from "../pageComponents/assessmentProcess/interface/IDataProcess";
import IDataProcessingEntry from "../pageComponents/assessmentProcess/interface/IDataProcessingEntry";
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

  const [reportDetails, setReportDetails] = useState(
    initialAssessment.reportDetails
  );
  const [processName, setProcessName] = useState<string>(
    initialAssessment.processName
  );
  const [dataProcess, setDataProcess] = useState(initialAssessment.dataProcess);
  const [riskAssessments, setRiskAssessments] = useState(
    initialAssessment.riskAssessments
  );
  const [dataFlow, setDataFlow] = useState(initialAssessment.dataFlow);
  const [recommendedSolutions, setRecommendedSolutions] = useState(
    initialAssessment.recommendedSolutions
  );
  const [overallAssessment, setOverallAssessment] = useState<IAssessment>({
    reportDetails: reportDetails,
    processName: processName,
    dataProcess: dataProcess,
    riskAssessments: riskAssessments,
    dataFlow: dataFlow,
    recommendedSolutions: recommendedSolutions,
  });

  useEffect(() => {
    // backend update needed: get this data from current user, user department, validations from db if exist and current version
    const data = sampleAssessmentInputs;
    if (data) setReportDetails(data.reportDetails);
  }, []);

  const currentQuestionSet = questionSets.find(
    (questionSet) => questionSet.version === reportDetails.version
  );

  currentQuestionSet?.questionSections.forEach((section, sectionIndex) => {
    const entries: IDataProcessingEntry[] = [];

    section.questions.forEach((_question, questionIndex) => {
      entries.push({
        sectionId: sectionIndex,
        questionId: questionIndex,
        answer: "",
      });
    });

    if (dataProcess) dataProcess.dataProcessing.push(entries);
  });

  // actions
  const handleNext = () => {
    if (activeStep === stepsLabel.length - 1) {
      if (validateAssessmentData() || bypassAssessmentValidation) {
        handleAssessmentData();
        navigate("/");
      }
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
      console.log(["Data Flow image is required"]); // #Todo toastify
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
    setOverallAssessment({
      reportDetails: reportDetails,
      processName: processNameList[parseInt(processName)].name,
      dataProcess: dataProcess,
      riskAssessments: riskAssessments,
      dataFlow: dataFlow,
      recommendedSolutions: recommendedSolutions,
    });
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
          assessmentVersion={reportDetails.version}
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
          questionSet={currentQuestionSet}
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
          assessmentInputs={overallAssessment}
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
