import { TD, TH, TR, Table } from "@ag-media/react-pdf-table";
import { Text, View } from "@react-pdf/renderer";
import { recommendedSolutionColumnHeaders } from "../../../values/list";
import { recommendedSolTitle } from "../../../values/string";
import IRecommendedSolution from "../../pageComponents/assessmentProcess/interface/IRecommendedSolution";
import CommonPage from "../common/CommonPage";
import documentStyle from "../styles/documentStyle";

interface Props {
  Recommendations: IRecommendedSolution[];
}

const RecommendationPage = ({ Recommendations }: Props) => {
  return (
    <CommonPage>
      <View style={[documentStyle.formTitle, documentStyle.centeredView]}>
        <Text>{recommendedSolTitle}</Text>
      </View>

      <Table>
        <TH style={documentStyle.tableRow}>
          {recommendedSolutionColumnHeaders.map((header, index) => (
            <TD key={index} style={documentStyle.formLabel}>
              {header}
            </TD>
          ))}
        </TH>
        {Recommendations.map((recommendation, index) => (
          <TR key={index} style={documentStyle.tableRow}>
            <TD style={documentStyle.formValue}>{recommendation.name}</TD>
            <TD style={documentStyle.formValue}>{recommendation.priorityNo}</TD>
          </TR>
        ))}
      </Table>
    </CommonPage>
  );
};

export default RecommendationPage;
