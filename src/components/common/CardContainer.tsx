import { Box } from "@mui/material";
import { ReactNode } from "react";
import { mainHeaderPrimaryColor } from "../../values/colors";

interface Props {
  children: ReactNode;
}

const CardContainer = ({ children }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "auto",
        maxWidth: "60vh",
        padding: "2vh",
        background: mainHeaderPrimaryColor,
        borderRadius: "2vh",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      {children}
    </Box>
  );
};

export default CardContainer;
