import {
  Box,
  Divider,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { processNameList } from "../../values/list";
import {
  assessmentVersionLabel,
  processNameDescription,
  processNameLabel,
} from "../../values/string";
import ButtonStepsNavigator from "../common/ButtonNavigator";
import CardContainer from "../common/CardContainer";
import IStepControls from "./interface/IStepControls";

interface Props {
  processName: string;
  onChange: (event: SelectChangeEvent) => void;
  assessmentVersion: string | "";
  stepControls: IStepControls;
}

const ProcessName = ({
  processName,
  onChange,
  assessmentVersion,
  stepControls,
}: Props) => {
  const [currentProcessName, setProcessName] = useState(processName);
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event);
    setProcessName(event.target.value);
  };

  return (
    <CardContainer variant="md">
      <Typography variant="h6" p="3vh">
        <strong>{processNameDescription}</strong>
      </Typography>
      <Divider />
      <Typography variant="body1" textAlign="left" p="2vh">
        <strong>{processNameLabel}</strong>
      </Typography>
      <FormControl
        variant="outlined"
        sx={{ textAlign: "left", paddingX: "2vh" }}
      >
        <Select value={currentProcessName} onChange={handleChange} displayEmpty>
          {processNameList.map((process) => (
            <MenuItem value={process.id} key={process.id}>
              {process.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box my="2vh" px="1vh">
        <Typography>
          {assessmentVersionLabel} {assessmentVersion}
        </Typography>
      </Box>
      <ButtonStepsNavigator
        activeStep={stepControls.activeStep}
        onNext={stepControls.onNext}
        onBack={stepControls.onBack}
        stepsComponentsLength={stepControls.stepsComponentsLength}
      />
    </CardContainer>
  );
};

export default ProcessName;
