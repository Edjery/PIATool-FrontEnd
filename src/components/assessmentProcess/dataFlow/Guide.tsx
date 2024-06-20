import {
  Box,
  Button,
  Collapse,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState } from "react";
import legendFlowChart from "../../../assets/sampleFigures/FlowChartLegend.png";
import sampleFlowChart from "../../../assets/sampleFigures/SampleFlowChart.png";
import {
  btnToggleGuide,
  processDataColumnA,
  processDataColumnB,
} from "../../../values/string";
import ImageBox from "../../common/ImageBox";

const Guide = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleGuide = () => {
    setOpen(!isOpen);
  };
  return (
    <Box>
      <Button onClick={toggleGuide} variant="contained" sx={{ my: "2vh" }}>
        {btnToggleGuide}
      </Button>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <Box sx={{ mt: 2 }}>
          <TableContainer sx={{ marginBottom: "2vh" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      fontSize: "3vh",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    {processDataColumnA}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "3vh",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    {processDataColumnB}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell sx={{ textAlign: "center" }}>
                    <ImageBox img={sampleFlowChart} height="50vh" />
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <ImageBox img={legendFlowChart} height="50vh" />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Collapse>
    </Box>
  );
};

export default Guide;
