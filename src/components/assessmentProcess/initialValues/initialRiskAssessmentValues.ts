import IRiskAssessment from "../interface/IRiskAssessment";

const initialRiskAssessmentValues: IRiskAssessment[] = [
    {
        id: Math.random(),
        riskName: "",
        impactRating: "",
        probabilityRating: "",
    },
];

export default initialRiskAssessmentValues