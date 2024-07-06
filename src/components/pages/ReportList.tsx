import { Box } from "@mui/material";
import { mainBodyHeight } from "../../values/values";
import FormContainer from "../common/FormContainer";
import DataTable from "../pageComponents/reportList/DataTable";

const ReportList = () => {
  return (
    <Box sx={{ width: "100%", height: mainBodyHeight, overflow: "auto" }}>
      <FormContainer variant={"100%"} title={"Privacy Impact Assessment List"}>
        <DataTable />
      </FormContainer>
    </Box>
  );
};

export default ReportList;
