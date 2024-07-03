import { Document, PDFViewer } from "@react-pdf/renderer";
import { assessmentDocumentTitle } from "../../values/string";
import IAssessmentInputs from "../assessmentProcess/interface/IAssessmentInputs";
import DataFlowPage from "./assessmentDocumentPages/DataFlowPage";
import DataPrivacyClearancePage from "./assessmentDocumentPages/DataPrivacyClearancePage";
import HomePage from "./assessmentDocumentPages/HomePage";
import ProcessAnalysisPage from "./assessmentDocumentPages/ProcessAnalysisPage";
import ProcessDescriptionPage from "./assessmentDocumentPages/ProcessDescriptionPage";
import RecommendationPage from "./assessmentDocumentPages/RecommendationPage";
import RiskAssessmentPage from "./assessmentDocumentPages/RiskAssessmentPage";
import IAssessmentReportDetails from "./interface/IAssessmentReportDetails";
import documentStyle from "./styles/documentStyle";

interface Props {
  AssessmentInputs: IAssessmentInputs;
  ReportDetails: IAssessmentReportDetails;
}

const AssessmentDocument = ({ AssessmentInputs, ReportDetails }: Props) => {
  const processName = AssessmentInputs.processName;
  const DataProcess = AssessmentInputs.dataProcess;
  const RiskAssessments = AssessmentInputs.riskAssessments;
  const DataFlow = AssessmentInputs.dataFlow;
  const Recommendations = AssessmentInputs.recommendedSolutions;

  return (
    <PDFViewer style={documentStyle.viewer}>
      <Document title={assessmentDocumentTitle} style={{ fontFamily: "Arial" }}>
        <HomePage ReportDetails={ReportDetails} />
        <ProcessDescriptionPage
          ProcessName={processName}
          DataProcess={DataProcess}
        />
        <ProcessAnalysisPage
          ReportDetails={ReportDetails}
          DataProcess={DataProcess}
        />
        <RiskAssessmentPage RiskAssessments={RiskAssessments} />
        <DataFlowPage DataFlow={DataFlow} />
        <RecommendationPage Recommendations={Recommendations} />
        <DataPrivacyClearancePage />
      </Document>
    </PDFViewer>
  );
};

export default AssessmentDocument;
