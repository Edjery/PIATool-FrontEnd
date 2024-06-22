import { Box, TextField, Tooltip } from "@mui/material";
import { ChangeEvent } from "react";
import { usepDarkPrimaryColor, usepPrimaryColor } from "../../values/colors";

interface Props {
  hint: string;
  label: string;
  name: string;
  values: string | undefined;
  helperText: string | false | undefined;
  error: boolean | undefined;
  handleChange: {
    (e: ChangeEvent<any>): void;
    <T = string | ChangeEvent<any>>(field: T): T extends ChangeEvent<any>
      ? void
      : (e: string | ChangeEvent<any>) => void;
  };
  handleBlur: {
    (e: React.FocusEvent<any>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
}

const FormTextAreaField = ({
  hint,
  label,
  name,
  values,
  helperText,
  error,
  handleChange,
  handleBlur,
}: Props) => {
  return (
    <Box sx={{ my: "2vh" }}>
      <Box
        sx={{
          position: "relative",
          "& textarea": {
            width: "100%",
            height: "100%",
            padding: "8px",
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
        <Tooltip title={hint}>
          <TextField
            label={label}
            margin="normal"
            variant="outlined"
            name={name}
            multiline
            rows={3}
            value={values}
            required
            helperText={helperText}
            error={error}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
          />
        </Tooltip>
      </Box>
    </Box>
  );
};

export default FormTextAreaField;
