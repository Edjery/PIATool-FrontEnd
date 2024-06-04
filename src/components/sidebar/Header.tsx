import { Box } from "@mui/material";
import { UsepLogo } from "../../values/icons";
import { sideBarHeaderTitle } from "../../values/string";

const Header = () => {
  return (
    <Box sx={{ display: "flex", padding: "3vh" }}>
      <Box sx={{ marginTop: "0.5vh", marginRight: "2vh" }}>
        <UsepLogo />
      </Box>
      <Box>{sideBarHeaderTitle}</Box>
    </Box>
  );
};

export default Header;
