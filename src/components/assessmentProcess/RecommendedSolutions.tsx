import CardContainer from "../common/CardContainer";
import initialRecommendationSolutionValues from "./initialValues/initialRecommendationSolutionValues";
import IRecommendedSolution from "./interface/IRecommendedSolution";
import Header from "./recommendedSolution/Header";
import TableCalculations from "./recommendedSolution/TableCalculations";
import TableForm from "./recommendedSolution/TableForm";

interface Props {
  onSubmit: (recommendedSolutions: IRecommendedSolution[]) => void;
  recommendedSolutions: IRecommendedSolution[];
}

const RecommendedSolutions = ({ onSubmit, recommendedSolutions }: Props) => {
  return (
    <CardContainer variant="lg">
      <Header />
      <TableForm
        formInitialValues={initialRecommendationSolutionValues}
        onSubmit={onSubmit}
      />
      <TableCalculations rowData={recommendedSolutions} />
    </CardContainer>
  );
};

export default RecommendedSolutions;
