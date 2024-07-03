import { processNameList } from "../../../../values/list";
import IAssessmentInputs from "../interface/IAssessmentInputs";
import initialDataProcessValues from "./initialDataProcessValues";
import initialRecommendationSolutionValues from "./initialRecommendationSolutionValues";
import initialRiskAssessmentValues from "./initialRiskAssessmentValues";

const initialAssessmentInputs: IAssessmentInputs = {
    processName: processNameList[0].id.toString(),
    piaVersion: "",
    dataProcess: initialDataProcessValues,
    riskAssessments: initialRiskAssessmentValues,
    dataFlow: null,
    recommendedSolutions: initialRecommendationSolutionValues,
};

export default initialAssessmentInputs