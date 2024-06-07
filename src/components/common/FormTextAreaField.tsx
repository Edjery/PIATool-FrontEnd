import { Box, FormLabel, Input, Tooltip } from "@mui/material";
import { usepDarkPrimaryColor, usepPrimaryColor } from "../../values/colors";

interface Props {
  title: string;
  label: string;
}

const FormTextAreaField = ({ title, label }: Props) => {
  return (
    <Box sx={{ my: "2vh" }}>
      <Tooltip title={title}>
        <FormLabel>{label}</FormLabel>
      </Tooltip>
      <Box
        sx={{
          position: "relative",
          "& textarea": {
            width: "100%",
            height: "100%",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            resize: "none",
            "&:hover": {
              borderColor: "#888",
            },
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: usepPrimaryColor,
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: usepDarkPrimaryColor,
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "transparent",
              borderRadius: "8px",
            },
          },
        }}
      >
        <Input fullWidth multiline rows={3} disableUnderline />
      </Box>
    </Box>
  );
};

export default FormTextAreaField;
