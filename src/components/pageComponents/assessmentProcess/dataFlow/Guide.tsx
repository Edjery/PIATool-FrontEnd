import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  urlLegendFlowChart,
  urlSampleFlowChart,
} from "../../../../values/images";
import {
  btnToggleGuide,
  processDataColumnA,
  processDataColumnB,
} from "../../../../values/string";
import CollapseBox from "../../../common/CollapseBox";
import ImageBox from "../../../common/ImageBox";
const dataFlowGuideStyles = {
  tableContainer: {
    marginBottom: "2vh",
  },
  tableHeadCell: {
    fontSize: "3vh",
    fontWeight: "bold",
    textAlign: "center",
  },
  tableBodyCell: {
    textAlign: "center",
  },
};

const Guide = () => {
  return (
    <CollapseBox ButtonName={btnToggleGuide}>
      <TableContainer sx={dataFlowGuideStyles.tableContainer}>
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
              <TableCell sx={dataFlowGuideStyles.tableHeadCell}>
                {processDataColumnB}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell sx={dataFlowGuideStyles.tableBodyCell}>
                <ImageBox img={urlSampleFlowChart} height="50vh" />
              </TableCell>
              <TableCell sx={dataFlowGuideStyles.tableBodyCell}>
                <ImageBox img={urlLegendFlowChart} height="50vh" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </CollapseBox>
  );
};

export default Guide;
