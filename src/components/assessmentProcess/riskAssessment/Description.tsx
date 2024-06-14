import { Box, Button, Collapse } from "@mui/material";
import { useState } from "react";
import {
  impactGuideTable,
  probabilityGuideTable,
  riskAssessmentTerms,
} from "../../../values/list";
import { btnToggleDescription } from "../../../values/string";
import GenericTable from "../../common/GenericTable";

const Description = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleDescription = () => {
    setOpen(!isOpen);
  };

  return (
    <Box>
      <Button
        onClick={toggleDescription}
        variant="contained"
        sx={{ my: "2vh" }}
      >
        {btnToggleDescription}
      </Button>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <Box sx={{ mt: 2 }}>
          <GenericTable
            title={riskAssessmentTerms.title}
            columnHeaders={riskAssessmentTerms.columnHeaders}
            rows={riskAssessmentTerms.rows}
          />
          <GenericTable
            title={impactGuideTable.title}
            columnHeaders={impactGuideTable.columnHeaders}
            rows={impactGuideTable.rows}
          />
          <GenericTable
            title={probabilityGuideTable.title}
            columnHeaders={probabilityGuideTable.columnHeaders}
            rows={probabilityGuideTable.rows}
          />
        </Box>
      </Collapse>
    </Box>
  );
};

export default Description;
