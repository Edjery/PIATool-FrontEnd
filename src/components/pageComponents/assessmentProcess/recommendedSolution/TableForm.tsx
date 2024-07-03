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
import { useState } from "react";
import { IconDelete } from "../../../../values/icons";
import {
  btnAdd,
  btnOrder,
  recommendedSolColumnA,
  recommendedSolColumnB,
  recommendedSolTitle,
  tableColumnAction,
} from "../../../../values/string";
import FormContainer from "../../../common/FormContainer";
import IRecommendedSolution from "../interface/IRecommendedSolution";
import recommendedSolutionSchema from "../schema/recommendedSolution";

const formColumnHeaders = [
  recommendedSolColumnA,
  recommendedSolColumnB,
  tableColumnAction,
];

const generateOptions = (length: number) => {
  return Array.from({ length }, (_, index) => ({
    value: (index + 1).toString(),
    text: (index + 1).toString(),
    selected: false,
  }));
};

interface Props {
  onSubmit: (riskAssessmentList: IRecommendedSolution[]) => void;
  formInitialValues: IRecommendedSolution[];
}

const TableForm = ({ onSubmit, formInitialValues }: Props) => {
  const initialOptions = generateOptions(formInitialValues.length);
  const [options, setOptions] = useState(initialOptions);

  const handleAddOption = () => {
    const newOption = {
      value: `${options.length + 1}`,
      text: `${options.length + 1}`,
      selected: false,
    };
    setOptions((prevOptions) => [...prevOptions, newOption]);
  };

  const handleRemoveOption = () => {
    if (options.length > 1) {
      setOptions((prevOptions) => prevOptions.slice(0, -1));
    }
  };

  return (
    <Box>
      <FormContainer variant="lg" title={recommendedSolTitle}>
        <Formik
          initialValues={{ recommendedSolutions: formInitialValues }}
          validationSchema={recommendedSolutionSchema}
          onSubmit={(values) => {
            onSubmit(values.recommendedSolutions);
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
                  <FieldArray name="recommendedSolutions">
                    {({ push, remove }) => (
                      <TableBody>
                        {values.recommendedSolutions.map(
                          (recommendation, index) => {
                            const name = `recommendedSolutions[${index}].name`;
                            const touchedName = getIn(touched, name);
                            const errorName = getIn(errors, name);

                            const priorityNo = `recommendedSolutions[${index}].priorityNo`;
                            const touchedPriorityNo = getIn(
                              touched,
                              priorityNo
                            );
                            const errorImpactRating = getIn(errors, priorityNo);

                            return (
                              <TableRow key={recommendation.id}>
                                <TableCell>
                                  <TextField
                                    variant="outlined"
                                    name={name}
                                    value={recommendation.name}
                                    required
                                    helperText={
                                      touchedName && errorName ? errorName : ""
                                    }
                                    error={Boolean(touchedName && errorName)}
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
                                      touchedPriorityNo && errorImpactRating
                                    )}
                                  >
                                    <Select
                                      value={recommendation.priorityNo}
                                      name={priorityNo}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      required
                                    >
                                      {options.map((option) => {
                                        if (!option.selected) {
                                          return (
                                            <MenuItem
                                              key={option.value}
                                              value={option.value}
                                            >
                                              {option.text}
                                            </MenuItem>
                                          );
                                        }
                                        return null;
                                      })}
                                    </Select>
                                    {touchedPriorityNo && errorImpactRating && (
                                      <FormHelperText>
                                        {errorImpactRating}
                                      </FormHelperText>
                                    )}
                                  </FormControl>
                                </TableCell>
                                <TableCell>
                                  <Button
                                    variant="contained"
                                    onClick={() => {
                                      remove(index);
                                      handleRemoveOption();
                                    }}
                                    fullWidth
                                  >
                                    <IconDelete />
                                  </Button>
                                </TableCell>
                              </TableRow>
                            );
                          }
                        )}
                        <TableRow>
                          <TableCell colSpan={3} sx={{ borderBottom: "none" }}>
                            <Button
                              fullWidth
                              onClick={() => {
                                push({
                                  id: Math.random(),
                                  name: "",
                                  priorityNo: "",
                                });
                                handleAddOption();
                              }}
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
                      <TableCell colSpan={2}></TableCell>
                      <TableCell>
                        <Button
                          type="submit"
                          color="success"
                          variant="contained"
                          fullWidth
                        >
                          {btnOrder}
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
