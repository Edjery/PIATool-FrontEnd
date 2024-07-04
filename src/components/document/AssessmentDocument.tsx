import { Document, PDFViewer } from "@react-pdf/renderer";
import { useEffect, useState } from "react";
import IDataQuestionSet from "../../values/interface/IDataQuestionSets";
import { questionSets } from "../../values/list";
import { assessmentDocumentTitle } from "../../values/string";
import IAssessment from "../pageComponents/assessmentProcess/interface/IAssessment";
import DataFlowPage from "./assessmentDocumentPages/DataFlowPage";
import DataPrivacyClearancePage from "./assessmentDocumentPages/DataPrivacyClearancePage";
import HomePage from "./assessmentDocumentPages/HomePage";
import ProcessAnalysisPage from "./assessmentDocumentPages/ProcessAnalysisPage";
import ProcessDescriptionPage from "./assessmentDocumentPages/ProcessDescriptionPage";
import RecommendationPage from "./assessmentDocumentPages/RecommendationPage";
import RiskAssessmentPage from "./assessmentDocumentPages/RiskAssessmentPage";
import documentStyle from "./styles/documentStyle";

interface Props {
  AssessmentInputs: IAssessment;
}

const AssessmentDocument = ({ AssessmentInputs }: Props) => {
  const [currentQuestionSet, setCurrentQuestionSet] = useState<
    IDataQuestionSet | undefined
  >(questionSets[0]);

  const ReportDetails = AssessmentInputs.reportDetails;
  const ProcessName = AssessmentInputs.processName;
  const DataProcess = AssessmentInputs.dataProcess;
  const RiskAssessments = AssessmentInputs.riskAssessments;
  const DataFlow = AssessmentInputs.dataFlow;
  const Recommendations = AssessmentInputs.recommendedSolutions;

  useEffect(() => {
    const data = questionSets;
    if (data) {
      const currentQuestionSet = data.find(
        (questionSet) => questionSet.version === ReportDetails.version
      );
      setCurrentQuestionSet(currentQuestionSet);
    }
  }, []);

  const handleRecommendationSorting = () => {
    Recommendations.sort(
      (a, b) => parseInt(a.priorityNo) - parseInt(b.priorityNo)
    );
  };

  handleRecommendationSorting();
  return (
    <PDFViewer style={documentStyle.viewer}>
      <Document title={assessmentDocumentTitle} style={{ fontFamily: "Arial" }}>
        <HomePage ReportDetails={ReportDetails} />
        <ProcessDescriptionPage
          ProcessName={ProcessName}
          DataProcess={DataProcess}
        />
        <ProcessAnalysisPage
          QuestionSet={currentQuestionSet}
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
