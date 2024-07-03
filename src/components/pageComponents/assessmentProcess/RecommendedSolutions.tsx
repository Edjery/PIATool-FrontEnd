import { useState } from "react";
import ButtonStepsNavigator from "../../common/ButtonNavigator";
import CardContainer from "../../common/CardContainer";
import IRecommendedSolution from "./interface/IRecommendedSolution";
import IStepControls from "./interface/IStepControls";
import Header from "./recommendedSolution/Header";
import TableCalculations from "./recommendedSolution/TableCalculations";
import TableForm from "./recommendedSolution/TableForm";

interface Props {
  onSubmit: (recommendedSolutions: IRecommendedSolution[]) => void;
  recommendedSolutions: IRecommendedSolution[];
  stepControls: IStepControls;
}

const RecommendedSolutions = ({
  onSubmit,
  recommendedSolutions,
  stepControls,
}: Props) => {
  const [currentSolutions, setSolutions] = useState(recommendedSolutions);
  const handleSubmit = (recommendedSolutions: IRecommendedSolution[]) => {
    onSubmit(recommendedSolutions);
    setSolutions(recommendedSolutions);
  };
  return (
    <CardContainer variant="lg">
      <Header />
      <TableForm formInitialValues={currentSolutions} onSubmit={handleSubmit} />
      <TableCalculations rowData={currentSolutions} />
      <ButtonStepsNavigator
        activeStep={stepControls.activeStep}
        onNext={() => {
          onSubmit(currentSolutions);
          stepControls.onNext();
        }}
        onBack={() => {
          onSubmit(currentSolutions);
          stepControls.onBack();
        }}
        stepsComponentsLength={stepControls.stepsComponentsLength}
      />
    </CardContainer>
  );
};

export default RecommendedSolutions;
