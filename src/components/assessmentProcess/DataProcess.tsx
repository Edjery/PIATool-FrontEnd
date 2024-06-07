import { Box, Button, Typography } from "@mui/material";
import CardContainer from "../common/CardContainer";
import DataProcessSectionOne from "./DataProcess/DataProcessSectionOne";
import { btnBack, btnNext } from "../../values/string";

const DataProcess = () => (
  <CardContainer variant="lg">
    <DataProcessSectionOne />
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Button variant="contained">{btnBack}</Button>
      <Button variant="contained">{btnNext}</Button>
    </Box>
  </CardContainer>
);

export default DataProcess;
