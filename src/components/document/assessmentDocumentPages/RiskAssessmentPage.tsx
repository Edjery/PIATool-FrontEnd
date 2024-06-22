import { View, Text } from "@react-pdf/renderer";
import { riskAssessmentTitle } from "../../../values/string";
import CommonPage from "../common/CommonPage";
import documentStyle from "../styles/documentStyle";
import { Table, TD, TH, TR } from "@ag-media/react-pdf-table";
import calculateRiskRating from "../../../helper/calculateRiskRating";
import { riskAssessmentColumnHeaders } from "../../../values/list";
import IRiskAssessment from "../../assessmentProcess/interface/IRiskAssessment";

interface Props {
  RiskAssessments: IRiskAssessment[];
}

const RiskAssessmentPage = ({ RiskAssessments }: Props) => {
  return (
    <CommonPage>
      <View style={[documentStyle.formTitle, documentStyle.centeredView]}>
        <Text>{riskAssessmentTitle}</Text>
      </View>

      <Table>
        <TH style={documentStyle.tableRow}>
          {riskAssessmentColumnHeaders.map((header, index) => (
            <TD key={index} style={documentStyle.formLabel}>
              {header}
            </TD>
          ))}
        </TH>
        {RiskAssessments.map((risk, index) => (
          <TR key={index} style={documentStyle.tableRow}>
            <TD style={documentStyle.formValue}>{risk.name}</TD>
            <TD style={documentStyle.formValue}>{risk.impactRating}</TD>
            <TD style={documentStyle.formValue}>{risk.probabilityRating}</TD>
            <TD style={documentStyle.formValue}>
              {calculateRiskRating(risk.impactRating, risk.probabilityRating)}
            </TD>
          </TR>
        ))}
      </Table>
    </CommonPage>
  );
};

export default RiskAssessmentPage;
