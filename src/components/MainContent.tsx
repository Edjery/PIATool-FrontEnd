import { Box } from "@mui/material";
import { mainContentPrimaryColor } from "../values/colors";
import UserHomePage from "./mainContent/UserHomePage";
import Disclaimer from "./assessmentProcess/Disclaimer";
import ProcessName from "./assessmentProcess/ProcessName";

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
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      {/* <UserHomePage /> */}
      <Disclaimer />
      {/* <ProcessName /> */}
    </Box>
  );
};

export default MainContent;
