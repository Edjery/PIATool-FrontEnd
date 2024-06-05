import { Box } from "@mui/material";
import { mainContentPrimaryColor } from "../values/colors";
import UserHomePage from "./mainContent/UserHomePage";

const MainContent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        background: mainContentPrimaryColor,
        padding: "2vh",
        height: "85vh",
      }}
    >
      <UserHomePage />
    </Box>
  );
};

export default MainContent;
