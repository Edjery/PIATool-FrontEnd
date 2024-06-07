import { Box, FormLabel, Input, Tooltip } from "@mui/material";

interface Props {
  title: string;
  label: string;
}

const FormTextField = ({ title, label }: Props) => {
  return (
    <Box sx={{ my: "2vh" }}>
      <Tooltip title={title}>
        <FormLabel>{label}</FormLabel>
      </Tooltip>
      <Input fullWidth />
    </Box>
  );
};

export default FormTextField;
