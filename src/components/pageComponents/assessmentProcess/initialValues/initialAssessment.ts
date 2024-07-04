import { processNameList } from "../../../../values/list";
import IAssessment from "../interface/IAssessment";
import initialDataProcessValues from "./initialDataProcessValues";
import initialRecommendationSolutionValues from "./initialRecommendationSolutionValues";
import initialReportDetails from "./initialReportDetails";
import initialRiskAssessmentValues from "./initialRiskAssessmentValues";

const initialAssessmentInputs: IAssessment = {
    reportDetails: initialReportDetails,
    processName: processNameList[0].id.toString(),
    piaVersion: "",
    dataProcess: initialDataProcessValues,
    riskAssessments: initialRiskAssessmentValues,
    dataFlow: null,
    recommendedSolutions: initialRecommendationSolutionValues,
};

export default initialAssessmentInputs