import { Table, TD, TR } from "@ag-media/react-pdf-table";
import { View, Text } from "@react-pdf/renderer";
import { processLevelAnalysisTitle } from "../../../values/string";
import CommonPage from "../common/CommonPage";
import documentStyle from "../styles/documentStyle";
import { questionSets } from "../../../values/list";
import IAssessmentReportDetails from "../interface/IAssessmentReportDetails";
import IDataProcess from "../../pageComponents/assessmentProcess/interface/IDataProcess";

interface Props {
  ReportDetails: IAssessmentReportDetails;
  DataProcess: IDataProcess | null;
}

const ProcessAnalysisPage = ({ DataProcess, ReportDetails }: Props) => {
  const currentQuestionSet = questionSets.find(
    (questionSet) => questionSet.version === ReportDetails.version
  );

  return (
    <CommonPage>
      <View style={[documentStyle.formTitle, documentStyle.centeredView]}>
        <Text>{processLevelAnalysisTitle}</Text>
      </View>

      {currentQuestionSet?.questionSet.map((set, indexSet) => (
        <View key={indexSet}>
          <View style={documentStyle.formTitle}>
            <Text>{set.title}</Text>
          </View>

          <Table>
            {set.questions.map((question, indexQuestion) => (
              <View key={indexQuestion}>
                <TR>
                  <TD>
                    <View style={documentStyle.tableRow}>
                      <View style={documentStyle.tableLabel}>
                        <Text>{question}</Text>
                      </View>
                      <View style={documentStyle.tableValue}>
                        <Text>
                          {
                            DataProcess?.dataProcessing[indexSet][indexQuestion]
                              .answer
                          }
                        </Text>
                      </View>
                    </View>
                  </TD>
                </TR>
              </View>
            ))}
          </Table>
        </View>
      ))}
    </CommonPage>
  );
};

export default ProcessAnalysisPage;
