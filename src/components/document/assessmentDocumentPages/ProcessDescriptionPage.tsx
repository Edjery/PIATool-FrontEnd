import { Table, TD, TR } from "@ag-media/react-pdf-table";
import { Text, View } from "@react-pdf/renderer";
import {
  dataPurposeLabel,
  dataSecurityLabel,
  dataSubjectLabel,
  formFieldLabel,
  formNameLabel,
  processDescriptionTitle,
  processNameLabel,
  processNarrativeLabel,
  processTitle,
} from "../../../values/string";
import IDataProcess from "../../assessmentProcess/interface/IDataProcess";
import CommonPage from "../common/CommonPage";
import documentStyle from "../styles/documentStyle";

interface Props {
  DataProcess: IDataProcess | null;
  ProcessName: string;
}

const ProcessDescriptionPage = ({ DataProcess, ProcessName }: Props) => {
  return (
    <CommonPage>
      <View style={documentStyle.centeredView}>
        <View style={documentStyle.formContainer}>
          <View style={documentStyle.formLabel}>
            <Text>{processNameLabel}</Text>
          </View>
          <View style={documentStyle.formValue}>
            <Text>{ProcessName}</Text>
          </View>
        </View>
      </View>

      <View style={[documentStyle.formTitle, documentStyle.centeredView]}>
        <Text>{processDescriptionTitle}</Text>
      </View>

      <View style={documentStyle.formTitle}>
        <Text>{processTitle}</Text>
      </View>

      <View>
        <Table>
          <TR>
            <TD>
              <View style={documentStyle.tableRow}>
                <View style={documentStyle.tableLabel}>
                  <Text>{dataSubjectLabel}</Text>
                </View>
                <View style={documentStyle.tableValue}>
                  <Text>{DataProcess?.dataSubjects}</Text>
                </View>
              </View>
            </TD>
          </TR>
          <TR>
            <TD>
              <View style={documentStyle.tableRow}>
                <View style={documentStyle.tableLabel}>
                  <Text>{formNameLabel}</Text>
                </View>
                <View style={documentStyle.tableValue}>
                  <Text>{DataProcess?.formName}</Text>
                </View>
              </View>
            </TD>
          </TR>
          <TR>
            <TD>
              <View style={documentStyle.tableRow}>
                <View style={documentStyle.tableLabel}>
                  <Text>{formFieldLabel}</Text>
                </View>
                <View style={documentStyle.tableRow}>
                  {DataProcess != null &&
                    DataProcess.dataField.map((field) => (
                      <Text style={documentStyle.gridItem}>{field}</Text>
                    ))}
                </View>
              </View>
            </TD>
          </TR>
          <TR>
            <TD>
              <View style={documentStyle.tableRow}>
                <View style={documentStyle.tableLabel}>
                  <Text>{dataPurposeLabel}</Text>
                </View>
                <View style={documentStyle.tableValue}>
                  <Text>{DataProcess?.processingPurpose}</Text>
                </View>
              </View>
            </TD>
          </TR>
          <TR>
            <TD>
              <View style={documentStyle.tableRow}>
                <View style={documentStyle.tableLabel}>
                  <Text>{dataSecurityLabel}</Text>
                </View>
                <View style={documentStyle.tableValue}>
                  <Text>{DataProcess?.securityMeasure}</Text>
                </View>
              </View>
            </TD>
          </TR>
          <TR>
            <TD>
              <View style={documentStyle.tableRow}>
                <View style={documentStyle.tableLabel}>
                  <Text>{processNarrativeLabel}</Text>
                </View>
                <View style={documentStyle.tableValue}>
                  <Text>{DataProcess?.processNarrative}</Text>
                </View>
              </View>
            </TD>
          </TR>
        </Table>
      </View>
    </CommonPage>
  );
};

export default ProcessDescriptionPage;
