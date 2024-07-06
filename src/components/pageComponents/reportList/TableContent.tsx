import { Table, TableContainer } from "@mui/material";
import { Order } from "../../../values/type";
import Body from "./TableContent/Body";
import Head from "./TableContent/Head";

interface Props {
  orderBy: keyof IReportListRow;
  order: Order;
  visibleRows: IReportListRow[];
  anchorEls: (HTMLElement | null)[];
  createSortHandler: (property: keyof IReportListRow) => (event: React.MouseEvent<unknown>) => void;
  handleActionButton: (endpoint: string, value: string, rowIndex: number, id: number) => void;
  handleOpen: (event: React.MouseEvent<HTMLButtonElement>, index: number) => void;
  handleClose: (index: number) => void;
}

const tableFontSize = "0.750rem";

const TableContent = ({
  orderBy,
  order,
  visibleRows,
  anchorEls,
  createSortHandler,
  handleActionButton,
  handleOpen,
  handleClose,
}: Props) => {
  return (
    <TableContainer>
      <Table>
        <Head tableFontSize={tableFontSize} orderBy={orderBy} order={order} onClick={createSortHandler} />
        <Body
          tableFontSize={tableFontSize}
          visibleRows={visibleRows}
          anchorEls={anchorEls}
          onActionButton={handleActionButton}
          onOpen={handleOpen}
          onClose={handleClose}
        />
      </Table>
    </TableContainer>
  );
};

export default TableContent;
