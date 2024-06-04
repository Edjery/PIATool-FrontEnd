import { Box, Divider, Typography } from "@mui/material";
import { sideBarSubHeaderTitle } from "../../values/string";
import { sideBarPrimaryTextColor } from "../../values/colors";

const SubHeader = () => {
  return (
    <Box>
      <Divider sx={{ backgroundColor: sideBarPrimaryTextColor }} />
      <Typography sx={{ textAlign: "center", padding: "1vh" }}>
        {sideBarSubHeaderTitle}
      </Typography>
      <Divider sx={{ backgroundColor: sideBarPrimaryTextColor }} />
    </Box>
  );
};

export default SubHeader;
