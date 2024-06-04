import { Box, Typography } from "@mui/material";

const MainContent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        background: "yellow",
        padding: "2vh",
        height: "90vh",
      }}
    >
      <Typography>Main Content</Typography>
    </Box>
  );
};

export default MainContent;
