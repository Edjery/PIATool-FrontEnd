import { Box, Button, Grid } from "@mui/material";
import Header from "./assets/components/Header";
import MainContent from "./assets/components/MainContent";
import SideBarPopUp from "./assets/components/SideBarPopUp";
import { useState } from "react";

function App() {
  const [expanded, setExpanded] = useState(false);

  const toggleSideBar = () => {
    setExpanded(!expanded);
  };

  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <SideBarPopUp isExpanded={expanded} />
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Grid container>
            <Grid item xs={12}>
              <Header toggleSideBar={toggleSideBar} />
            </Grid>
            <Grid item xs={12}>
              <MainContent />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
