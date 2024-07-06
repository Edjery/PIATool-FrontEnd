import { Box, Grid, IconButton, Menu, TextField, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { IconFilter } from "../../../values/icons";
import DropdownBox from "../../common/DropdownBox";
import IDateFilterConfig from "./interface/IDateFilterConfig";
import IFilterConfig from "./interface/IFilterConfig";

interface Props {
  filterList: IFilterConfig[];
  dateFilterList: IDateFilterConfig[];
  searchTerm: string;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FilterHeader = ({ filterList, dateFilterList, searchTerm, handleSearchChange }: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const toggleFilters = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ px: "2vh" }}>
      <Box sx={{ display: "flex", pb: "3vh" }}>
        <TextField label="Search" value={searchTerm} onChange={handleSearchChange} variant="standard" sx={{ flexGrow: 1 }} />
        <Tooltip title="Filter list">
          <IconButton onClick={toggleFilters}>
            <IconFilter />
          </IconButton>
        </Tooltip>
      </Box>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Grid container spacing={4} sx={{ p: "2vh", textAlign: "center", maxWidth: "80vh" }}>
          {filterList.map((filter, index) => (
            <Grid item xs={6}>
              <DropdownBox
                key={index}
                label={filter.label}
                value={filter.value}
                onChange={filter.onChange}
                options={filter.options}
                optionLabelKey={filter.optionLabelKey}
                optionValueKey={filter.optionValueKey}
                sx={{ minWidth: 200 }}
                fullWidth
              />
            </Grid>
          ))}
          {dateFilterList.map((filter, index) => (
            <Grid item xs={6} key={index}>
              <TextField
                label={filter.label}
                type={filter.type}
                value={filter.value}
                onChange={filter.onChange}
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
              />
            </Grid>
          ))}
        </Grid>
      </Menu>
    </Box>
  );
};

export default FilterHeader;
