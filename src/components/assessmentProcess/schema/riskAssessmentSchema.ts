import Yup from "../../../values/yup";

const riskAssessmentSchema = Yup.object().shape({
    riskAssessments: Yup.array()
        .of(
            Yup.object().shape({
                id: Yup.number().required("ID is required"),
                riskName: Yup.string().required("This field is required"),
                impactRating: Yup.string().required("Impact rating is required"),
                probabilityRating: Yup.string().required(
                    "Probability rating is required"
                ),
            })
        )
        .required("Risk assessments are required"),
});

export default riskAssessmentSchema