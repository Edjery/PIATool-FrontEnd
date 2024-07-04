import { Table, TD, TR } from "@ag-media/react-pdf-table";
import { Text, View } from "@react-pdf/renderer";
import { questionSets } from "../../../values/list";
import { processLevelAnalysisTitle } from "../../../values/string";
import IDataProcess from "../../pageComponents/assessmentProcess/interface/IDataProcess";
import CommonPage from "../common/CommonPage";
import documentStyle from "../styles/documentStyle";

interface Props {
  Version: string;
  DataProcess: IDataProcess | null;
}

const ProcessAnalysisPage = ({ DataProcess, Version }: Props) => {
  const currentQuestionSet = questionSets.find(
    (questionSet) => questionSet.version === Version
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
