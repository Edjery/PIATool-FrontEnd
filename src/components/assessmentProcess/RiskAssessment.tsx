import { useEffect, useState } from "react";
import BottomButtonNavigators from "../common/BottomButtonNavigators";
import CardContainer from "../common/CardContainer";
import formInitialValues from "./initialValues/riskAssessmentInitialValues";
import IRiskAssessment from "./interface/IRiskAssessment";
import Description from "./riskAssessment/Description";
import TableCalculations from "./riskAssessment/TableCalculations";
import TableForm from "./riskAssessment/TableForm";
import RiskRatingMap from "./riskAssessment/RiskRatingMap";
import Header from "./riskAssessment/Header";

const RiskAssessment = () => {
  const [riskAssessment, setRiskAssessment] = useState<IRiskAssessment[]>([]);

  const handleRiskAssessmentData = (riskAssessmentList: IRiskAssessment[]) => {
    setRiskAssessment(riskAssessmentList);
  };

  useEffect(() => {
    // console.log(riskAssessment);
  }, [riskAssessment]);

  return (
    <CardContainer variant="lg">
      <Header />
      <TableForm
        onSubmit={handleRiskAssessmentData}
        formInitialValues={formInitialValues}
      />
      <TableCalculations rowData={riskAssessment} />
      <RiskRatingMap />
      <Description />
      <BottomButtonNavigators />
    </CardContainer>
  );
};

export default RiskAssessment;
