import { Box } from "@mui/material";
import { mainContentPrimaryColor } from "../values/colors";
import UserHomePage from "./mainContent/UserHomePage";
import Disclaimer from "./assessmentProcess/Disclaimer";
import ProcessName from "./assessmentProcess/ProcessName";
import DataProcess from "./assessmentProcess/DataProcess";
import RiskAssessment from "./assessmentProcess/RiskAssessment";
import ProcessDataFlow from "./assessmentProcess/ProcessDataFlow";
import RecommendedSolutions from "./assessmentProcess/RecommendedSolutions";

const MainContent = () => (
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
    {/* <Disclaimer /> */}
    {/* <ProcessName /> */}
    {/* <DataProcess /> */}
    {/* <RiskAssessment /> */}
    {/* <ProcessDataFlow /> */}
    <RecommendedSolutions />
  </Box>
);

export default MainContent;
