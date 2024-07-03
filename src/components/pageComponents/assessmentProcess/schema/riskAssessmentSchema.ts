import Yup from "../../../../values/yup";

// #TODO use keys from the interface here

const riskAssessmentSchema = Yup.object().shape({
    riskAssessments: Yup.array()
        .of(
            Yup.object().shape({
                id: Yup.number().required("ID is required"),
                name: Yup.string().required("This field is required"),
                impactRating: Yup.string().required("Impact rating is required"),
                probabilityRating: Yup.string().required(
                    "Probability rating is required"
                ),
            })
        )
        .required("Risk assessments are required"),
});

export default riskAssessmentSchema