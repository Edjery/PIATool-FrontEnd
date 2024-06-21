import { Box } from "@mui/material";
import usepLogo from "../../assets/logo/usep_logo.png";

const HeaderUsepLogo = () => {
  return (
    <Box
      component="img"
      src={usepLogo}
      sx={{
        height: "35vh",
        padding: "5px",
        border: "5px solid white",
        borderRadius: "50%",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    />
  );
};

export default HeaderUsepLogo;
