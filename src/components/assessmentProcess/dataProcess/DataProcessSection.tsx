import {
  Box,
  Button,
  FormLabel,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { FieldArray, Form, Formik, getIn } from "formik";
import { IconDelete } from "../../../values/icons";
import { dataProcessingQuestions } from "../../../values/list";
import {
  btnAddField,
  dataPurposeHint,
  dataPurposeLabel,
  dataPurposeName,
  dataSecurityHint,
  dataSecurityLabel,
  dataSecurityName,
  dataSubjectHint,
  dataSubjectLabel,
  dataSubjectName,
  formFieldHint,
  formFieldLabel,
  formName,
  formNameHint,
  formNameLabel,
  processDescription,
  processDescriptionTitle,
  processLevelAnalysisDescription,
  processLevelAnalysisTitle,
  processTitle,
} from "../../../values/string";
import FormContainer from "../../common/FormContainer";
import FormTextAreaField from "../../common/FormTextAreaField";
import FormTextField from "../../common/FormTextField";
import formInitialValues from "../initialValues/dataProcessInitialValues";
import IDataProcess from "../interface/IDataProcess";
import dataProcessSchema from "../schema/dataProcessSchema";
import CardContainerTitle from "../../common/CardContainerTitle";
import CardContainerDescription from "../../common/CardContainerDescription";

const handleSubmit = (values: IDataProcess) => {
  console.log("Form submitted:", values);
};

const DataProcessSection = () => {
  return (
    <Formik
      initialValues={formInitialValues}
      validationSchema={dataProcessSchema}
      onSubmit={handleSubmit}
    >
      {({ values, touched, errors, handleChange, handleBlur }) => (
        <Form>
          <CardContainerTitle title={processDescriptionTitle} />
          <CardContainerDescription description={processDescription} />
          <FormContainer variant="lg" title={processTitle}>
            <FormTextField
              title={dataSubjectHint}
              label={dataSubjectLabel}
              name={dataSubjectName}
              values={values.dataSubjects}
              helperText={touched.dataSubjects && errors.dataSubjects}
              error={touched.dataSubjects && Boolean(errors.dataSubjects)}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
            <FormTextField
              title={formNameHint}
              label={formNameLabel}
              name={formName}
              values={values.formName}
              helperText={touched.formName && errors.formName}
              error={touched.formName && Boolean(errors.formName)}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />

            <Tooltip title={formFieldHint}>
              <FormLabel>{formFieldLabel}</FormLabel>
            </Tooltip>
            <FieldArray name="dataField">
              {({ push, remove }) => (
                <Box>
                  {values.dataField.map((_, index) => (
                    <Box
                      key={index}
                      display="flex"
                      alignItems="center"
                      marginY="2vh"
                    >
                      <TextField
                        required
                        fullWidth
                        value={values.dataField[index]}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label={`Data Field ${index + 1}`}
                        name={`dataField[${index}]`}
                        helperText={errors.dataField && errors.dataField[index]}
                        error={!!errors.dataField && !!errors.dataField[index]}
                      />
                      <Button
                        variant="contained"
                        sx={{ marginLeft: "3vh" }}
                        type="button"
                        onClick={() => remove(index)}
                      >
                        <IconDelete />
                      </Button>
                    </Box>
                  ))}
                  {values.dataField.length === 0 && (
                    <Typography color="error">
                      Please add at least one data field
                    </Typography>
                  )}
                  <Button
                    type="button"
                    variant="outlined"
                    onClick={() => push("")}
                  >
                    {btnAddField}
                  </Button>
                </Box>
              )}
            </FieldArray>

            <FormTextAreaField
              title={dataPurposeHint}
              label={dataPurposeLabel}
              name={dataPurposeName}
              values={values.processingPurpose}
              helperText={touched.processingPurpose && errors.processingPurpose}
              error={
                touched.processingPurpose && Boolean(errors.processingPurpose)
              }
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
            <FormTextAreaField
              title={dataSecurityHint}
              label={dataSecurityLabel}
              name={dataSecurityName}
              values={values.securityMeasure}
              helperText={touched.securityMeasure && errors.securityMeasure}
              error={touched.securityMeasure && Boolean(errors.securityMeasure)}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
          </FormContainer>
          <CardContainerTitle title={processLevelAnalysisTitle} />
          <CardContainerDescription
            description={processLevelAnalysisDescription}
          />
          {dataProcessingQuestions.map((section, sectionIndex) => (
            <FormContainer
              variant="lg"
              title={section.title}
              key={section.title}
            >
              {section.questions.map((question, questionIndex) => {
                const currentName = `dataProcessing[${sectionIndex}][${questionIndex}].answer`;
                const currentTouch = getIn(touched, currentName);
                const currentError = getIn(errors, currentName);
                const currentValues =
                  values.dataProcessing[sectionIndex][questionIndex].answer;

                return (
                  <FormTextAreaField
                    title={""}
                    label={question}
                    key={questionIndex}
                    name={currentName}
                    values={currentValues}
                    helperText={
                      currentTouch && currentError ? currentError : ""
                    }
                    error={Boolean(currentTouch && currentError)}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  />
                );
              })}
            </FormContainer>
          ))}
          <Button
            type="submit"
            onClick={() =>
              values.dataField.length === 0
                ? console.log("Please add at least one data field") // #TODO add alert
                : null
            }
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default DataProcessSection;
