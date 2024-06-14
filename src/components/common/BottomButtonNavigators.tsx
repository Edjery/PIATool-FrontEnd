import { Box, Button } from "@mui/material";
import { btnBack, btnNext } from "../../values/string";

const BottomButtonNavigators = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Button variant="contained">{btnBack}</Button>
      <Button variant="contained">{btnNext}</Button>
    </Box>
  );
};

export default BottomButtonNavigators;
