import { Box } from "@mui/material";
import { mainContentPrimaryColor } from "../values/colors";
import UserHomePage from "./mainContent/UserHomePage";
import Disclaimer from "./assessmentProcess/Disclaimer";

const MainContent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        background: mainContentPrimaryColor,
        padding: "2vh",
        height: "auto",
        minHeight: "85vh",
      }}
    >
      {/* <UserHomePage /> */}
      <Disclaimer />
    </Box>
  );
};

export default MainContent;
