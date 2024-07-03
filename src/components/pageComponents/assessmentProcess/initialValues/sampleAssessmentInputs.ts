import { processNameList } from "../../../../values/list";
import { assessmentVersion } from "../../../../values/string";
import IAssessmentInputs from "../interface/IAssessmentInputs";


const sampleAssessmentInputs: IAssessmentInputs = {
    processName: processNameList[4].name.toString(),
    piaVersion: assessmentVersion,
    dataProcess: {
        dataSubjects: "Students",
        formName: "Registration Form",
        dataField: ["Name", "Age", "Sex", "Birthday", "Mother's name", "Father's name", "Birthday"], // , "MoreInfo", "MoreInfo", "MoreInfo", "MoreInfo", "MoreInfo", "MoreInfo", "MoreInfo", "MoreInfo", "MoreInfo", "MoreInfo", "MoreInfo", "MoreInfo", "MoreInfo", "MoreInfo", "MoreInfo", "MoreInfo", "MoreInfo", "MoreInfo", "MoreInfo", "MoreInfo", "MoreInfo", "MoreInfo", "MoreInfo", "MoreInfo"],
        processingPurpose: "For registration",
        securityMeasure: "Locked document drawer",
        processNarrative: "We take the data from the students after they filled the form",
        dataProcessing: [
            [
                { sectionId: 0, questionId: 1, answer: 'School' },
                { sectionId: 0, questionId: 2, answer: 'Gathering hall' },
                { sectionId: 0, questionId: 0, answer: 'Morning to Afternoon' },
            ],
            [
                { sectionId: 1, questionId: 0, answer: 'No' },
                { sectionId: 1, questionId: 1, answer: 'N/A' },
                { sectionId: 1, questionId: 2, answer: 'N/A' },
                { sectionId: 1, questionId: 3, answer: 'N/A' },
                { sectionId: 1, questionId: 4, answer: 'No' },
            ],
            [
                { sectionId: 2, questionId: 0, answer: '5 years' },
                { sectionId: 2, questionId: 1, answer: 'Locked drawers' },
                { sectionId: 2, questionId: 2, answer: 'Yes' },
            ]
        ],
    },
    riskAssessments: [
        {
            id: Math.random(),
            name: "Fire",
            impactRating: "4",
            probabilityRating: "1",
        },
        {
            id: Math.random(),
            name: "Earthquake",
            impactRating: "2",
            probabilityRating: "2",
        },
        {
            id: Math.random(),
            name: "Flood",
            impactRating: "3",
            probabilityRating: "2",
        },
    ],
    dataFlow: null,
    recommendedSolutions: [
        {
            id: Math.random(),
            name: "Locked safe",
            priorityNo: "3",
        },
        {
            id: Math.random(),
            name: "Soft copy",
            priorityNo: "2",
        },
        {
            id: Math.random(),
            name: "Paper crusher",
            priorityNo: "1",
        },
    ],
};

export default sampleAssessmentInputs
