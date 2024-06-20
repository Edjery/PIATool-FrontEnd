import { dataProcessingQuestions } from "../../../values/list";
import IDataProcess from "../interface/IDataProcess";
import IDataProcessingEntry from "../interface/IDataProcessingEntry";

const initialDataProcessValues: IDataProcess = {
    dataSubjects: "",
    formName: "",
    dataField: [],
    processingPurpose: "",
    securityMeasure: "",
    dataProcessing: [],
};

dataProcessingQuestions.forEach((section, sectionIndex) => {
    const entries: IDataProcessingEntry[] = [];

    section.questions.forEach((_question, questionIndex) => {
        entries.push({
            version: section.version,
            sectionId: sectionIndex,
            questionId: questionIndex,
            answer: "",
        });
    });

    initialDataProcessValues.dataProcessing.push(entries);
});

export default initialDataProcessValues