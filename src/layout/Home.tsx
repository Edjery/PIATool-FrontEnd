import { Box, Grid } from "@mui/material";
import { useState } from "react";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import SideBarPopUp from "../components/SideBarPopUp";

const Home = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleSideBar = () => {
    setExpanded(!expanded);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <SideBarPopUp isExpanded={expanded} />
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Grid container>
          <Grid item xs={12}>
            <Header toggleSideBar={toggleSideBar} expanded={expanded} />
          </Grid>
          <Grid item xs={12}>
            <MainContent />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
