import { useEffect, useState } from "react";
import CardContainer from "../common/CardContainer";
import formInitialValues from "./initialValues/recommendationSolutionInitialValues";
import IRecommendedSolution from "./interface/IRecommendedSolution";
import Header from "./recommendedSolution/Header";
import TableCalculations from "./recommendedSolution/TableCalculations";
import TableForm from "./recommendedSolution/TableForm";

const RecommendedSolutions = () => {
  const [recommendedSolutions, setRecommendationSolution] = useState<
    IRecommendedSolution[]
  >([]);

  const handleSubmit = (recommendedSolutions: IRecommendedSolution[]) => {
    setRecommendationSolution(recommendedSolutions);
  };

  useEffect(() => {
    console.log(recommendedSolutions);
  }, [recommendedSolutions]);

  return (
    <CardContainer variant="lg">
      <Header />
      <TableForm
        formInitialValues={formInitialValues}
        onSubmit={handleSubmit}
      />
      <TableCalculations rowData={recommendedSolutions} />
    </CardContainer>
  );
};

export default RecommendedSolutions;
