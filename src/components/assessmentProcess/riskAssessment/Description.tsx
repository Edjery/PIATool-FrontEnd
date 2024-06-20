import {
  impactGuideTable,
  probabilityGuideTable,
  riskAssessmentTerms,
} from "../../../values/list";
import { btnToggleDescription } from "../../../values/string";
import CollapseBox from "../../common/CollapseBox";
import GenericTable from "../../common/GenericTable";

const Description = () => {
  return (
    <CollapseBox ButtonName={btnToggleDescription}>
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
    </CollapseBox>
  );
};

export default Description;
