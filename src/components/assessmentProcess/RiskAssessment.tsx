import { useState } from "react";
import ButtonStepsNavigator from "../common/ButtonNavigator";
import CardContainer from "../common/CardContainer";
import IRiskAssessment from "./interface/IRiskAssessment";
import IStepControls from "./interface/IStepControls";
import Description from "./riskAssessment/Description";
import Header from "./riskAssessment/Header";
import RiskRatingMap from "./riskAssessment/RiskRatingMap";
import TableCalculations from "./riskAssessment/TableCalculations";
import TableForm from "./riskAssessment/TableForm";

interface Props {
  onSubmit: (riskAssessmentList: IRiskAssessment[]) => void;
  riskAssessments: IRiskAssessment[];
  stepControls: IStepControls;
}

const RiskAssessment = ({ onSubmit, riskAssessments, stepControls }: Props) => {
  const [currentRisks, setRisks] = useState(riskAssessments);
  const handleSubmit = (riskAssessmentList: IRiskAssessment[]) => {
    onSubmit(riskAssessmentList);
    setRisks(riskAssessmentList);
  };
  return (
    <CardContainer variant="lg">
      <Header />
      <TableForm onSubmit={handleSubmit} formInitialValues={currentRisks} />
      <TableCalculations rowData={currentRisks} />
      <RiskRatingMap />
      <Description />
      <ButtonStepsNavigator
        activeStep={stepControls.activeStep}
        onNext={() => {
          onSubmit(currentRisks);
          stepControls.onNext();
        }}
        onBack={() => {
          onSubmit(currentRisks);
          stepControls.onBack();
        }}
        stepsComponentsLength={stepControls.stepsComponentsLength}
      />
    </CardContainer>
  );
};

export default RiskAssessment;
