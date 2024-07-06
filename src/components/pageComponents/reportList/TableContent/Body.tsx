import { Button, Menu, MenuItem, TableBody, TableCell, TableRow, Typography } from "@mui/material";
import { IconHorizontalMore } from "../../../../values/icons";
import { assessmentListActionButtons, reportListRowsKeys } from "../../../../values/list";

interface Props {
  tableFontSize: string;
  visibleRows: IReportListRow[];
  anchorEls: (HTMLElement | null)[];
  onActionButton: (endpoint: string, value: string, rowIndex: number, id: number) => void;
  onOpen: (event: React.MouseEvent<HTMLButtonElement>, index: number) => void;
  onClose: (index: number) => void;
}

const Body = ({ tableFontSize, visibleRows, anchorEls, onActionButton, onOpen, onClose }: Props) => {
  return (
    <TableBody>
      {visibleRows.map((row, rowIndex) => (
        <TableRow key={rowIndex}>
          {reportListRowsKeys.map((key) => (
            <TableCell key={key} sx={{ fontSize: tableFontSize }}>
              {row[key as keyof IReportListRow]}
            </TableCell>
          ))}
          <TableCell>
            <Button onClick={(event) => onOpen(event, rowIndex)}>
              <IconHorizontalMore />
            </Button>
            <Menu
              anchorEl={anchorEls[rowIndex]}
              open={Boolean(anchorEls[rowIndex])}
              onClose={() => onClose(rowIndex)}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              {assessmentListActionButtons.map((button, buttonIndex) => (
                <MenuItem key={buttonIndex} onClick={() => onActionButton(button.link, button.value, rowIndex, row.id)}>
                  {button.icon}
                  <Typography pl={"1vh"} component={"span"} sx={{ fontSize: tableFontSize }}>
                    {button.label}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default Body;
