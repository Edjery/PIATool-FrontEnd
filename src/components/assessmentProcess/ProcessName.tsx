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
  assessmentVersionName,
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
      <Typography variant="h6" sx={{ fontWeight: "bold", padding: "3vh" }}>
        {processNameDescription}
      </Typography>
      <Divider />
      <Typography
        variant="body1"
        sx={{ fontWeight: "bold", textAlign: "left", padding: "2vh" }}
      >
        {processNameLabel}
      </Typography>
      <FormControl
        variant="outlined"
        sx={{ textAlign: "left", paddingX: "1vh" }}
      >
        <Select value={currentProcessName} onChange={handleChange} displayEmpty>
          {processNameList.map((process) => (
            <MenuItem value={process.id} key={process.id}>
              {process.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box sx={{ marginY: "2vh", paddingX: "1vh" }}>
        <Typography>
          {assessmentVersionName} {assessmentVersion}
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
