import { Box, Button } from "@mui/material";
import { IconMenu } from "../values/icons";

interface Props {
  toggleSideBar: () => void;
  expanded: boolean;
}

const Header = ({ toggleSideBar, expanded }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "white",
        padding: "2vh",
      }}
    >
      <Button
        onClick={toggleSideBar}
        variant={expanded ? "contained" : "outlined"}
        color="primary"
      >
        <IconMenu />
      </Button>
    </Box>
  );
};

export default Header;
