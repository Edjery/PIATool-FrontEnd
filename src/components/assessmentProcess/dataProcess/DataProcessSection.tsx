import {
  Box,
  Button,
  FormLabel,
  Input,
  Tooltip,
  Typography,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import { IconDelete } from "../../../values/icons";
import { dataProcessingQuestions } from "../../../values/list";
import {
  btnAddField,
  dataPurposeHint,
  dataPurposeLabel,
  dataSecurityHint,
  dataSecurityLabel,
  dataSubjectHint,
  dataSubjectLabel,
  formFieldHint,
  formFieldLabel,
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

interface IDataField {
  id: number;
  value: string;
}

const DataProcessSection = () => {
  const [dataFieldList, setDataFieldList] = useState<IDataField[]>([]);

  const handleAddField = () => {
    setDataFieldList([...dataFieldList, { id: Date.now(), value: "" }]);
  };

  const handleDeleteField = (id: number) => {
    setDataFieldList(dataFieldList.filter((dataField) => dataField.id !== id));
  };

  const handleChangeValue = (
    id: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const updatedList = dataFieldList.map((dataField) =>
      dataField.id === id
        ? { ...dataField, value: event.target.value }
        : dataField
    );
    setDataFieldList(updatedList);
  };

  return (
    <Box>
      <Typography variant="h6" sx={{ textAlign: "left", fontWeight: "bold" }}>
        {processDescriptionTitle}
      </Typography>
      <Typography variant="body1" sx={{ textAlign: "justify" }}>
        {processDescription}
      </Typography>
      <FormContainer variant="lg" title={processTitle}>
        <FormTextField title={dataSubjectHint} label={dataSubjectLabel} />
        <FormTextField title={formNameHint} label={formNameLabel} />
        <Tooltip title={formFieldHint}>
          <FormLabel>{formFieldLabel}</FormLabel>
        </Tooltip>
        <Box sx={{ marginY: "2vh" }}>
          <Button variant="outlined" onClick={handleAddField}>
            {btnAddField}
          </Button>
          {dataFieldList.map((dataField) => (
            <Box
              key={dataField.id}
              display="flex"
              alignItems="center"
              marginY="2vh"
            >
              <Input
                fullWidth
                value={dataField.value}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  handleChangeValue(dataField.id, event)
                }
              />
              <Button
                variant="contained"
                sx={{ marginLeft: "3vh" }}
                onClick={() => handleDeleteField(dataField.id)}
              >
                <IconDelete />
              </Button>
            </Box>
          ))}
        </Box>
        <FormTextAreaField title={dataPurposeHint} label={dataPurposeLabel} />
        <FormTextAreaField title={dataSecurityHint} label={dataSecurityLabel} />
      </FormContainer>

      <Typography variant="h6" sx={{ textAlign: "left", fontWeight: "bold" }}>
        {processLevelAnalysisTitle}
      </Typography>
      <Typography variant="body1" sx={{ textAlign: "justify" }}>
        {processLevelAnalysisDescription}
      </Typography>
      {dataProcessingQuestions.map((section) => (
        <FormContainer variant="lg" title={section.title} key={section.title}>
          {section.questions.map((question, index) => (
            <FormTextAreaField title={""} label={question} key={index} />
          ))}
        </FormContainer>
      ))}
    </Box>
  );
};

export default DataProcessSection;
