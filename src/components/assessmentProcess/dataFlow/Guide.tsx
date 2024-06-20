import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import legendFlowChart from "../../../assets/sampleFigures/FlowChartLegend.png";
import sampleFlowChart from "../../../assets/sampleFigures/SampleFlowChart.png";
import {
  btnToggleGuide,
  processDataColumnA,
  processDataColumnB,
} from "../../../values/string";
import CollapseBox from "../../common/CollapseBox";
import ImageBox from "../../common/ImageBox";

const Guide = () => {
  return (
    <CollapseBox ButtonName={btnToggleGuide}>
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
    </CollapseBox>
  );
};

export default Guide;
