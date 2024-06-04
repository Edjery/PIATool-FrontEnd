import { Box } from "@mui/material";
import { mainContentPrimaryColor } from "../assets/values/colors";

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
    </Box>
  );
};

export default MainContent;
