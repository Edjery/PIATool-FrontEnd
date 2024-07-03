import ButtonStepsNavigator from "../common/ButtonNavigator";
import CardContainer from "../common/CardContainer";
import AssessmentDocument from "../document/AssessmentDocument";
import IAssessmentReportDetails from "../document/interface/IAssessmentReportDetails";
import IAssessmentInputs from "./interface/IAssessmentInputs";
import IStepControls from "./interface/IStepControls";

interface Props {
  assessmentInputs: IAssessmentInputs;
  stepControls: IStepControls;
  reportDetails: IAssessmentReportDetails;
}

const FinalProcess = ({
  assessmentInputs,
  stepControls,
  reportDetails,
}: Props) => {
  return (
    <CardContainer variant="lg">
      <AssessmentDocument
        AssessmentInputs={assessmentInputs}
        ReportDetails={reportDetails}
      />

      <ButtonStepsNavigator
        activeStep={stepControls.activeStep}
        onNext={() => {
          stepControls.onNext();
        }}
        onBack={() => {
          stepControls.onBack();
        }}
        stepsComponentsLength={stepControls.stepsComponentsLength}
      />
    </CardContainer>
  );
};

export default FinalProcess;
