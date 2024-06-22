import { Document, PDFViewer } from "@react-pdf/renderer";
import { processNameList } from "../../values/list";
import {
  assessmentDocumentTitle,
  assessmentVersion,
  sampleName,
  stampSampleDate,
} from "../../values/string";
import IAssessmentInputs from "../assessmentProcess/interface/IAssessmentInputs";
import DataPrivacyClearancePage from "./assessmentDocumentPages/DataPrivacyClearancePage";
import HomePage from "./assessmentDocumentPages/HomePage";
import ProcessAnalysisPage from "./assessmentDocumentPages/ProcessAnalysisPage";
import ProcessDescriptionPage from "./assessmentDocumentPages/ProcessDescriptionPage";
import IAssessmentReportDetails from "./interface/IAssessmentReportDetails";
import documentStyle from "./styles/documentStyle";
import RiskAssessmentPage from "./assessmentDocumentPages/RiskAssessmentPage";
import DataFlowPage from "./assessmentDocumentPages/DataFlowPage";
import RecommendationPage from "./assessmentDocumentPages/RecommendationPage";

interface Props {
  AssessmentInputs: IAssessmentInputs;
}

const AssessmentDocument = ({ AssessmentInputs }: Props) => {
  const ReportDetails: IAssessmentReportDetails = {
    author: sampleName,
    department: "",
    validated: true,
    dateValidated: stampSampleDate,
    processName: processNameList[0].name,
    version: assessmentVersion,
  };
  const DataProcess = AssessmentInputs.dataProcess;
  const RiskAssessments = AssessmentInputs.riskAssessments;
  const DataFlow = AssessmentInputs.dataFlow;
  const Recommendations = AssessmentInputs.recommendedSolutions;

  return (
    <PDFViewer style={documentStyle.viewer}>
      <Document title={assessmentDocumentTitle} style={{ fontFamily: "Arial" }}>
        <HomePage ReportDetails={ReportDetails} />
        <ProcessDescriptionPage
          ReportDetails={ReportDetails}
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
