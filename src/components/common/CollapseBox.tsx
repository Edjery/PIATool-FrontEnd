import { Box, Button, Collapse } from "@mui/material";
import { ReactNode, useState } from "react";

interface Props {
  ButtonName: string;
  children: ReactNode;
}

const CollapseBox = ({ ButtonName, children }: Props) => {
  const [status, toggleStatus] = useState(false);
  const toggleCollapsable = () => toggleStatus(!status);
  return (
    <Box>
      <Button
        onClick={toggleCollapsable}
        variant="contained"
        sx={{ my: "2vh" }}
      >
        {ButtonName}
      </Button>
      <Collapse in={status} timeout="auto" unmountOnExit>
        <Box sx={{ mt: 2 }}>{children}</Box>
      </Collapse>
    </Box>
  );
};

export default CollapseBox;
