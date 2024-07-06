import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";
import { mainHeaderPrimaryColor, usepPrimaryColor, usepTextPrimaryColor } from "../../values/colors";
import getWidthBySizeVariant from "../../helper/getWidthBySizeVariant";
import { SizeVariant } from "../../values/type";

interface Props {
  children: ReactNode;
  variant: SizeVariant;
  title: string;
}

const FormContainer = ({ children, variant, title }: Props) => {
  let cardWidth = getWidthBySizeVariant(variant);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "2vh",
        maxWidth: cardWidth,
        background: mainHeaderPrimaryColor,
        borderRadius: "2vh",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Box
        sx={{
          background: usepPrimaryColor,
        }}
      >
        <Typography
          sx={{
            textAlign: "left",
            padding: "2vh",
            color: usepTextPrimaryColor,
          }}
        >
          {title}
        </Typography>
      </Box>
      <Box
        sx={{
          padding: "2vh",
          textAlign: "left",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default FormContainer;
