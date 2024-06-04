import { Box, Typography } from "@mui/material";
import { UsepLogo } from "../../values/icons";
import { sideBarHeaderTitle } from "../../values/string";

const Header = () => {
  return (
    <Box sx={{ display: "flex", padding: "2.5vh" }}>
      <Box sx={{ marginTop: "0.5vh", marginRight: "2vh" }}>
        <UsepLogo />
      </Box>
      <Typography>{sideBarHeaderTitle}</Typography>
    </Box>
  );
};

export default Header;
