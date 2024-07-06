import { Box } from "@mui/material";
import { ReactNode } from "react";
import getWidthBySizeVariant from "../../helper/getWidthBySizeVariant";
import { mainHeaderPrimaryColor } from "../../values/colors";
import { SizeVariant } from "../../values/type";

interface Props {
  children: ReactNode;
  variant: SizeVariant;
}

const CardContainer = ({ children, variant }: Props) => {
  const cardWidth = getWidthBySizeVariant(variant);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: cardWidth,
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
