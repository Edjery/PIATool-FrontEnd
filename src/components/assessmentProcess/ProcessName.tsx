import {
  Box,
  Divider,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { processNameList } from "../../values/list";
import {
  assessmentVersionName,
  processNameDescription,
  processNameLabel,
} from "../../values/string";
import CardContainer from "../common/CardContainer";

interface Props {
  processName: string;
  onChange: (event: SelectChangeEvent) => void;
  assessmentVersion: string | "";
}

const ProcessName = ({ processName, onChange, assessmentVersion }: Props) => {
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
        <Select value={processName} onChange={onChange} displayEmpty>
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
    </CardContainer>
  );
};

export default ProcessName;
