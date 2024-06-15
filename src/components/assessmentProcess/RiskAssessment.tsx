import { useEffect, useState } from "react";
import BottomButtonNavigators from "../common/BottomButtonNavigators";
import CardContainer from "../common/CardContainer";
import formInitialValues from "./initialValues/riskAssessmentInitialValues";
import IRiskAssessment from "./interface/IRiskAssessment";
import Description from "./riskAssessment/Description";
import TableCalculations from "./riskAssessment/TableCalculations";
import TableForm from "./riskAssessment/TableForm";

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
      <TableForm
        onSubmit={handleRiskAssessmentData}
        formInitialValues={formInitialValues}
      />
      <TableCalculations rowData={riskAssessment} />
      <Description />
      <BottomButtonNavigators />
    </CardContainer>
  );
};

export default RiskAssessment;
