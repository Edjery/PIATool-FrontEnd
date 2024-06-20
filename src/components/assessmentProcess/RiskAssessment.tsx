import CardContainer from "../common/CardContainer";
import initialRiskAssessmentValues from "./initialValues/initialRiskAssessmentValues";
import IRiskAssessment from "./interface/IRiskAssessment";
import Description from "./riskAssessment/Description";
import Header from "./riskAssessment/Header";
import RiskRatingMap from "./riskAssessment/RiskRatingMap";
import TableCalculations from "./riskAssessment/TableCalculations";
import TableForm from "./riskAssessment/TableForm";

interface Props {
  onSubmit: (riskAssessmentList: IRiskAssessment[]) => void;
  riskAssessments: IRiskAssessment[];
}

const RiskAssessment = ({ onSubmit, riskAssessments }: Props) => {
  return (
    <CardContainer variant="lg">
      <Header />
      <TableForm
        onSubmit={onSubmit}
        formInitialValues={initialRiskAssessmentValues}
      />
      <TableCalculations rowData={riskAssessments} />
      <RiskRatingMap />
      <Description />
    </CardContainer>
  );
};

export default RiskAssessment;
