import { Box } from "@mui/material";
import { ReactNode } from "react";
import { mainHeaderPrimaryColor } from "../../values/colors";

interface Props {
  children: ReactNode;
  variant: "lg" | "md";
}

const CardContainer = ({ children, variant }: Props) => {
  let cardWidth = "60vh";

  switch (variant) {
    case "lg":
      cardWidth = "150vh";
      break;
    case "md":
      cardWidth = "60vh";
      break;
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: cardWidth,
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
