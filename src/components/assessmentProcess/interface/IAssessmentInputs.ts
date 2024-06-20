import IDataProcess from "./IDataProcess";
import IRecommendedSolution from "./IRecommendedSolution";
import IRiskAssessment from "./IRiskAssessment";

interface IAssessmentInputs {
    processName: string | null;
    piaVersion: string | null;
    dataProcess: IDataProcess | null;
    riskAssessments: IRiskAssessment[];
    dataFlow: File | null;
    recommendedSolutions: IRecommendedSolution[];
}
export default IAssessmentInputs