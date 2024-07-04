import IDataProcessingQuestions from "./IDataProcessingQuestions";

interface IDataQuestionSet {
    name: string;
    description: string;
    version: string;
    questionSections: IDataProcessingQuestions[]
}
export default IDataQuestionSet