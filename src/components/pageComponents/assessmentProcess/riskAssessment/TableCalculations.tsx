import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import calculateRiskRating from "../../../../helper/calculateRiskRating";
import getRiskRatingColor from "../../../../helper/getRiskRatingColor";
import { black, white } from "../../../../values/colors";
import { riskAssessmentColumnHeaders } from "../../../../values/list";
import IRiskAssessment from "../interface/IRiskAssessment";

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
                {riskAssessmentColumnHeaders.map((header, index) => (
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
                const riskRating = calculateRiskRating(
                  row.impactRating,
                  row.probabilityRating
                );
                let backgroundColor = getRiskRatingColor(riskRating);
                const color = riskRating === 16 ? white : black;

                return (
                  <TableRow key={index}>
                    <TableCell>{row.name}</TableCell>
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
