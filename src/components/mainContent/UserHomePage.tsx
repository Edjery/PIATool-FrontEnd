import { Box, Button, Typography } from "@mui/material";
import { btnStart, schoolName, websiteHeader } from "../../values/string";
import HeaderUsepLogo from "./HeaderUsepLogo";

const UserHomePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Box sx={{ marginTop: "3vh" }}>
        <HeaderUsepLogo />
      </Box>
      <Box sx={{ marginTop: "3vh" }}>
        <Typography variant="h4">{schoolName}</Typography>
        <Typography variant="h5">{websiteHeader}</Typography>
      </Box>
      <Box sx={{ marginTop: "3vh" }}>
        <Button variant="contained">{btnStart}</Button>;
      </Box>
    </Box>
  );
};

export default UserHomePage;
