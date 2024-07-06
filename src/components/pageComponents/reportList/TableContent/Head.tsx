import { TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";
import { reportListHeaders } from "../../../../values/list";
import { tableColumnAction } from "../../../../values/string";
import { Order } from "../../../../values/type";

interface Props {
  tableFontSize: string;
  orderBy: keyof IReportListRow;
  order: Order;
  onClick: (property: keyof IReportListRow) => (event: React.MouseEvent<unknown>) => void;
}

const Head = ({ tableFontSize, orderBy, order, onClick: onClick }: Props) => {
  return (
    <TableHead>
      <TableRow>
        {reportListHeaders.map((header) => (
          <TableCell key={header.id} sx={{ fontSize: tableFontSize }} sortDirection={orderBy === header.id ? order : false}>
            <TableSortLabel
              active={orderBy === header.id}
              direction={orderBy === header.id ? order : "asc"}
              onClick={onClick(header.id)}
            >
              {header.label}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell sx={{ fontSize: tableFontSize }}>{tableColumnAction}</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default Head;
