import ButtonStepsNavigator from "../../common/ButtonNavigator";
import CardContainer from "../../common/CardContainer";
import AssessmentDocument from "../../document/AssessmentDocument";
import IAssessment from "./interface/IAssessment";
import IStepControls from "./interface/IStepControls";

interface Props {
  assessmentInputs: IAssessment;
  stepControls: IStepControls;
}

const FinalProcess = ({ assessmentInputs, stepControls }: Props) => {
  return (
    <CardContainer variant="lg">
      <AssessmentDocument AssessmentInputs={assessmentInputs} />

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
