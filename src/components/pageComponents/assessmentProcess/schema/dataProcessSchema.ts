import * as Yup from 'yup';

const dataProcessSchema = Yup.object().shape({
    dataSubjects: Yup.string().required('Data Subjects is required'),
    formName: Yup.string().required('Form Name is required'),
    dataField: Yup.array().of(Yup.string()).min(1, 'At least one Data Field is required'),
    processingPurpose: Yup.string().required('Processing Purpose is required'),
    securityMeasure: Yup.string().required('Security Measure is required'),
    processNarrative: Yup.string().required('Process Narrative is required'),
    dataProcessing: Yup.array().of(
        Yup.array().of(
            Yup.object().shape({
                version: Yup.string().required('Version is required'),
                sectionId: Yup.number().required('Section ID is required'),
                questionId: Yup.number().required('Question ID is required'),
                answer: Yup.string().required('Answer is required'),
            })
        )
    ),
});


export default dataProcessSchema;
