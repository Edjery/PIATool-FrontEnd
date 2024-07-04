import { Box, Button } from "@mui/material";
import { mainHeaderPrimaryColor } from "../values/colors";
import { IconMenu } from "../values/icons";
import { headerHeight } from "../values/values";

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
        background: mainHeaderPrimaryColor,
        padding: "2vh",
        height: headerHeight,
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
