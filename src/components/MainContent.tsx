import { Box } from "@mui/material";
import { mainContentPrimaryColor } from "../values/colors";
import UserHomePage from "./UserHomePage";

const MainContent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        background: mainContentPrimaryColor,
        padding: "2vh",
        height: "90vh",
      }}
    >
      <UserHomePage />
    </Box>
  );
};

export default MainContent;
