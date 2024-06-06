import {
  Box,
  Button,
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
  assessmentVersion,
  assessmentVersionName,
  btnNext,
  processNameDescription,
  processNameLabel,
} from "../../values/string";
import CardContainer from "../common/CardContainer";

const ProcessName = () => {
  const [processName, setProcessName] = useState<string>(
    processNameList[0].id.toString()
  );

  const handleChange = (event: SelectChangeEvent) => {
    setProcessName(event.target.value);
  };
  return (
    <CardContainer>
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
        <Select value={processName} onChange={handleChange} displayEmpty>
          {processNameList.map((process) => (
            <MenuItem value={process.id}>{process.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box sx={{ marginY: "2vh", paddingX: "1vh" }}>
        <Button variant="contained" fullWidth>
          {btnNext}
        </Button>
      </Box>
      <Typography>
        {assessmentVersionName} {assessmentVersion}
      </Typography>
    </CardContainer>
  );
};

export default ProcessName;
