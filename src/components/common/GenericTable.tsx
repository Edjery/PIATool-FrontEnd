import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import ITable from "../../values/interface/ITable";

const GenericTable = ({ title, columnHeaders, rows }: ITable) => {
  return (
    <TableContainer sx={{ marginBottom: "2vh" }}>
      <Typography variant="h6" sx={{ padding: "1vh", fontWeight: "bold" }}>
        {title}
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            {columnHeaders.map((header, index) => (
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
          {rows.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <TableCell key={cellIndex}>{cell}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default GenericTable;
