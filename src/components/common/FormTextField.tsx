import { Box, TextField, Tooltip } from "@mui/material";
import { ChangeEvent } from "react";

interface Props {
  title: string;
  label: string;
  name: string;
  values: string;
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

const FormTextField = ({
  title,
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
      <Tooltip title={title}>
        <TextField
          label={label}
          margin="normal"
          variant="outlined"
          name={name}
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
  );
};

export default FormTextField;
