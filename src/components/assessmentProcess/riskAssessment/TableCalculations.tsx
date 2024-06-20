import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  riskAssessmentColumn1,
  riskAssessmentColumn2,
  riskAssessmentColumn3,
  riskAssessmentColumn4,
} from "../../../values/string";
import IRiskAssessment from "../interface/IRiskAssessment";

const dataColumnHeaders = [
  riskAssessmentColumn1,
  riskAssessmentColumn2,
  riskAssessmentColumn3,
  riskAssessmentColumn4,
];

interface Props {
  rowData: IRiskAssessment[];
}

const TableCalculations = ({ rowData }: Props) => {
  return (
    <Box>
      {rowData.length > 0 && rowData[0].impactRating != "" && (
        <TableContainer sx={{ marginBottom: "2vh" }}>
          <Table sx={{ tableLayout: "auto" }}>
            <TableHead>
              <TableRow>
                {dataColumnHeaders.map((header, index) => (
                  <TableCell
                    key={index}
                    sx={{ fontSize: "3vh", fontWeight: "bold" }}
                  >
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rowData.map((row, index) => {
                const riskRating =
                  parseInt(row.impactRating) * parseInt(row.probabilityRating);
                let backgroundColor = "#fafdff";
                if (riskRating === 1) {
                  backgroundColor = "#fafdff";
                } else if (riskRating >= 2 && riskRating <= 5) {
                  backgroundColor = "#ffffcc";
                } else if (riskRating >= 6 && riskRating <= 8) {
                  backgroundColor = "#ffff99";
                } else if (riskRating === 9) {
                  backgroundColor = "#ffcccc";
                } else if (riskRating >= 10 && riskRating <= 15) {
                  backgroundColor = "#ff9999";
                } else if (riskRating >= 16) {
                  backgroundColor = "#ff0000";
                }

                const color = riskRating === 16 ? "#ffffff" : "#000000";

                return (
                  <TableRow key={index}>
                    <TableCell>{row.riskName}</TableCell>
                    <TableCell>{row.impactRating}</TableCell>
                    <TableCell>{row.probabilityRating}</TableCell>
                    <TableCell style={{ backgroundColor, color }}>
                      {riskRating}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default TableCalculations;
