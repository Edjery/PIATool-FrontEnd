import { Document, Page, PDFViewer, Text, View } from "@react-pdf/renderer";
import documentStyle from "./styles/documentStyle";

const assessmentDocumentTitle = "Privacy Impact Assessment Report";

const AssessmentDocument = () => {
  return (
    <PDFViewer style={documentStyle.viewer} showToolbar={false}>
      <Document title={assessmentDocumentTitle}>
        <Page size="A4" style={documentStyle.page}>
          <View style={documentStyle.section}>
            <Text>Section #1</Text>
          </View>
          <View style={documentStyle.section}>
            <Text>Section #2</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default AssessmentDocument;
