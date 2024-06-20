import Yup from "../../../values/yup";

const recommendedSolutionSchema = Yup.object().shape({
    recommendedSolutions: Yup.array()
        .of(
            Yup.object().shape({
                id: Yup.number().required("ID is required"),
                name: Yup.string().required("This field is required"),
                priorityNo: Yup.string().required("Priority number is required"),
            })
        )
        .required("Recommended solutions are required"),
});

export default recommendedSolutionSchema