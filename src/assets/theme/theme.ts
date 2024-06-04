import { createTheme } from "@mui/material/styles";
import { usepPrimaryColor, usepSecondaryColor } from "../values/colors";

const theme = createTheme({
    palette: {
      primary: {
        main: usepPrimaryColor,
      },
      secondary: {
        main: usepSecondaryColor,
      },
    },
  });

export default theme;