import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { recommendedSolutionColumnHeaders } from "../../../../values/list";
import IRecommendedSolution from "../interface/IRecommendedSolution";

interface Props {
  rowData: IRecommendedSolution[];
}

const TableCalculations = ({ rowData }: Props) => {
  rowData.sort((a, b) => parseInt(a.priorityNo) - parseInt(b.priorityNo));
  return (
    <Box>
      {rowData.length > 0 && rowData[0].priorityNo != "" && (
        <TableContainer sx={{ marginBottom: "2vh" }}>
          <Table sx={{ tableLayout: "auto" }}>
            <TableHead>
              <TableRow>
                {recommendedSolutionColumnHeaders.map((header, index) => (
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
                return (
                  <TableRow key={index}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.priorityNo}</TableCell>
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
