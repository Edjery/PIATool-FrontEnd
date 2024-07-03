import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { FieldArray, Form, Formik, getIn } from "formik";

import { IconDelete } from "../../../../values/icons";
import { riskAssessmentOptions } from "../../../../values/list";
import {
  btnAdd,
  btnCalculate,
  riskAssessmentColumn1,
  riskAssessmentColumn2,
  riskAssessmentColumn3,
  riskAssessmentTitle,
  tableColumnAction,
} from "../../../../values/string";
import FormContainer from "../../../common/FormContainer";
import IRiskAssessment from "../interface/IRiskAssessment";
import riskAssessmentSchema from "../schema/riskAssessmentSchema";

const formColumnHeaders = [
  riskAssessmentColumn1,
  riskAssessmentColumn2,
  riskAssessmentColumn3,
  tableColumnAction,
];

interface Props {
  onSubmit: (riskAssessmentList: IRiskAssessment[]) => void;
  formInitialValues: IRiskAssessment[];
}

const TableForm = ({ onSubmit, formInitialValues }: Props) => {
  return (
    <Box>
      <FormContainer variant="lg" title={riskAssessmentTitle}>
        <Formik
          initialValues={{ riskAssessments: formInitialValues }}
          validationSchema={riskAssessmentSchema}
          onSubmit={(values) => {
            onSubmit(values.riskAssessments);
          }}
        >
          {({ values, touched, errors, handleChange, handleBlur }) => (
            <Form>
              <TableContainer sx={{ marginBottom: "2vh" }}>
                <Table sx={{ tableLayout: "auto" }}>
                  <TableHead>
                    <TableRow>
                      {formColumnHeaders.map((header, index) => (
                        <TableCell
                          key={index}
                          sx={{ fontSize: "3vh", fontWeight: "bold" }}
                        >
                          {header}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <FieldArray name="riskAssessments">
                    {({ push, remove }) => (
                      <TableBody>
                        {values.riskAssessments.map((risk, index) => {
                          const riskName = `riskAssessments[${index}].name`; // #TODO I can just pull the key of the interface
                          const touchedRiskName = getIn(touched, riskName);
                          const errorRiskName = getIn(errors, riskName);

                          const impactRating = `riskAssessments[${index}].impactRating`;
                          const touchedImpactRating = getIn(
                            touched,
                            impactRating
                          );
                          const errorImpactRating = getIn(errors, impactRating);
                          const probabilityRating = `riskAssessments[${index}].probabilityRating`;
                          const touchedProbabilityRating = getIn(
                            touched,
                            probabilityRating
                          );
                          const errorProbabilityRating = getIn(
                            errors,
                            probabilityRating
                          );

                          return (
                            <TableRow key={risk.id}>
                              <TableCell>
                                <TextField
                                  variant="outlined"
                                  name={riskName}
                                  value={risk.name}
                                  required
                                  helperText={
                                    touchedRiskName && errorRiskName
                                      ? errorRiskName
                                      : ""
                                  }
                                  error={Boolean(
                                    touchedRiskName && errorRiskName
                                  )}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  fullWidth
                                />
                              </TableCell>
                              <TableCell>
                                <FormControl
                                  variant="outlined"
                                  sx={{
                                    textAlign: "left",
                                    paddingX: "1vh",
                                  }}
                                  fullWidth
                                  error={Boolean(
                                    touchedImpactRating && errorImpactRating
                                  )}
                                >
                                  <Select
                                    value={risk.impactRating}
                                    name={impactRating}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                  >
                                    {riskAssessmentOptions.map((option) => (
                                      <MenuItem
                                        key={option.value}
                                        value={option.value}
                                      >
                                        {option.text}
                                      </MenuItem>
                                    ))}
                                  </Select>
                                  {touchedImpactRating && errorImpactRating && (
                                    <FormHelperText>
                                      {errorImpactRating}
                                    </FormHelperText>
                                  )}
                                </FormControl>
                              </TableCell>
                              <TableCell>
                                <FormControl
                                  variant="outlined"
                                  sx={{
                                    textAlign: "left",
                                    paddingX: "1vh",
                                  }}
                                  fullWidth
                                  error={Boolean(
                                    touchedProbabilityRating &&
                                      errorProbabilityRating
                                  )}
                                >
                                  <Select
                                    value={risk.probabilityRating}
                                    name={probabilityRating}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                  >
                                    {riskAssessmentOptions.map((option) => (
                                      <MenuItem
                                        key={option.value}
                                        value={option.value}
                                      >
                                        {option.text}
                                      </MenuItem>
                                    ))}
                                  </Select>
                                  {touchedProbabilityRating &&
                                    errorProbabilityRating && (
                                      <FormHelperText>
                                        {errorProbabilityRating}
                                      </FormHelperText>
                                    )}
                                </FormControl>
                              </TableCell>
                              <TableCell>
                                <Button
                                  variant="contained"
                                  onClick={() => remove(index)}
                                  fullWidth
                                >
                                  <IconDelete />
                                </Button>
                              </TableCell>
                            </TableRow>
                          );
                        })}
                        <TableRow>
                          <TableCell colSpan={4} sx={{ borderBottom: "none" }}>
                            <Button
                              fullWidth
                              onClick={() =>
                                push({
                                  id: Math.random(),
                                  riskName: "",
                                  impactRating: "",
                                  probabilityRating: "",
                                })
                              }
                            >
                              {btnAdd}
                            </Button>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    )}
                  </FieldArray>
                  <TableFooter>
                    <TableRow>
                      <TableCell colSpan={3}></TableCell>
                      <TableCell>
                        <Button
                          type="submit"
                          color="success"
                          variant="contained"
                          fullWidth
                        >
                          {btnCalculate}
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableFooter>
                </Table>
              </TableContainer>
            </Form>
          )}
        </Formik>
      </FormContainer>
    </Box>
  );
};

export default TableForm;
