import IRiskAssessment from "../interface/IRiskAssessment";

const formInitialValues: IRiskAssessment[] = [
    {
        id: Math.random(),
        riskName: "",
        impactRating: "",
        probabilityRating: "",
    },
];

export default formInitialValues