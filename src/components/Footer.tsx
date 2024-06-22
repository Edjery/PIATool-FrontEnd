import { Box, Typography } from "@mui/material";
import { mainHeaderPrimaryColor } from "../values/colors";
import { copyrightA, copyrightB, rightsReserved } from "../values/string";

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
        <strong>
          {copyrightA} &copy; {copyrightB}
        </strong>{" "}
        {rightsReserved}
      </Typography>
    </Box>
  );
};

export default Footer;
