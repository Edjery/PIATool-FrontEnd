import { Box, Grid } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SideBarPopUp from "../components/SideBarPopUp";
import { mainContentPrimaryColor } from "../values/colors";

const DashboardLayout = () => {
  const [expanded, setExpanded] = useState(true);

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
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                background: mainContentPrimaryColor,
                padding: "2vh",
                height: "83vh",
                minHeight: "83vh",
                alignItems: "center",
                textAlign: "center",
                overflow: "auto",
              }}
            >
              <Outlet />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
