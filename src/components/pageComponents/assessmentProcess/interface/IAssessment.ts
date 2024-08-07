import IReportDetails from "./IReportDetails";
import IDataProcess from "./IDataProcess";
import IRecommendedSolution from "./IRecommendedSolution";
import IRiskAssessment from "./IRiskAssessment";

interface IAssessment {
    reportDetails: IReportDetails
    processName: string | "";
    dataProcess: IDataProcess;
    riskAssessments: IRiskAssessment[];
    dataFlow: File | null;
    recommendedSolutions: IRecommendedSolution[];
}
export default IAssessment