import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";
import {
  mainHeaderPrimaryColor,
  usepPrimaryColor,
  usepTextPrimaryColor,
} from "../../values/colors";

interface Props {
  children: ReactNode;
  variant: "lg" | "md";
  title: string;
}

const FormContainer = ({ children, variant, title }: Props) => {
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
        margin: "2vh",
        maxWidth: { cardWidth },
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
