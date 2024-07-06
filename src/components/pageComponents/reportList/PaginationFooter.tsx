import { TablePagination } from "@mui/material";

interface Props {
  rowsPerPageOptions: number[];
  count: number;
  rowsPerPage: number;
  page: number;
  onPageChange: (event: unknown, newPage: number) => void;
  onRowsPerPageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PaginationFooter = ({ rowsPerPageOptions, count, rowsPerPage, page, onPageChange, onRowsPerPageChange }: Props) => {
  return (
    <TablePagination
      rowsPerPageOptions={rowsPerPageOptions}
      component="div"
      count={count}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={onPageChange}
      onRowsPerPageChange={onRowsPerPageChange}
    />
  );
};

export default PaginationFooter;
