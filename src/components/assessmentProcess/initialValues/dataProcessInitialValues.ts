import { dataProcessingQuestions } from "../../../values/list";
import IDataProcess from "../interface/IDataProcess";
import IDataProcessingEntry from "../interface/IDataProcessingEntry";

const formInitialValues: IDataProcess = {
    dataSubjects: "",
    formName: "",
    dataField: [],
    processingPurpose: "",
    securityMeasure: "",
    dataProcessing: [],
};

dataProcessingQuestions.forEach((section, sectionIndex) => {
    const entries: IDataProcessingEntry[] = [];

    section.questions.forEach((question, questionIndex) => {
        entries.push({
            version: section.version,
            sectionId: sectionIndex,
            questionId: questionIndex,
            answer: "",
        });
    });

    formInitialValues.dataProcessing.push(entries);
});

export default formInitialValues