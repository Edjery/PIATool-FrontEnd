import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, SxProps, Theme } from "@mui/material";
import { defaultFirstChoice } from "../../values/string";

interface DropdownBoxProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: Array<{ [key: string]: any }>;
  optionLabelKey?: string;
  optionValueKey?: string;
  sx?: SxProps<Theme> | undefined;
  fullWidth?: boolean | undefined;
}

const DropdownBox: React.FC<DropdownBoxProps> = ({
  label,
  value,
  onChange,
  options,
  optionLabelKey = "name",
  optionValueKey = "name",
  sx,
  fullWidth,
}) => {
  const handleChange = (event: SelectChangeEvent<string>) => {
    onChange(event.target.value);
  };

  return (
    <FormControl sx={sx} fullWidth={fullWidth}>
      <InputLabel>{label}</InputLabel>
      <Select value={value} label={label} onChange={handleChange} variant="outlined">
        <MenuItem value="">{defaultFirstChoice}</MenuItem>
        {options.map((option, index) => (
          <MenuItem key={index} value={option[optionValueKey]}>
            {option[optionLabelKey]}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropdownBox;
