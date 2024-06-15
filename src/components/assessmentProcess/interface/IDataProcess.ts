import IDataProcessingEntry from "./IDataProcessingEntry";

interface IDataProcess {
    dataSubjects: string;
    formName: string;
    dataField: string[];
    processingPurpose: string;
    securityMeasure: string;
    dataProcessing: IDataProcessingEntry[][]
}
export default IDataProcess

