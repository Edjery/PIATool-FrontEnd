import { Box } from "@mui/material";
import { sideBarPrimaryTextColor } from "../../values/colors";
import { UsepLogo } from "../../values/icons";
import { sideBarHeaderTitle } from "../../values/string";

const Header = () => {
  return (
    <Box sx={{ display: "flex", padding: "3vh" }}>
      <Box sx={{ marginTop: "0.5vh", marginRight: "2vh" }}>
        <UsepLogo />
      </Box>
      <Box sx={{ color: sideBarPrimaryTextColor }}>{sideBarHeaderTitle}</Box>
    </Box>
  );
};

export default Header;
