import { Box, Typography } from "@mui/material";
import { mainHeaderPrimaryColor } from "../values/colors";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        background: mainHeaderPrimaryColor,
        padding: "2vh",
      }}
    >
      <Typography variant="body1" align="center">
        <strong>Copyright &copy; 2023 USeP PIA.</strong> All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
