import IDataProcess from "./IDataProcess";
import IRecommendedSolution from "./IRecommendedSolution";
import IRiskAssessment from "./IRiskAssessment";

interface IAssessmentInputs {
    processName: string | "";
    piaVersion: string | "";
    dataProcess: IDataProcess | null;
    riskAssessments: IRiskAssessment[];
    dataFlow: File | null;
    recommendedSolutions: IRecommendedSolution[];
}
export default IAssessmentInputs