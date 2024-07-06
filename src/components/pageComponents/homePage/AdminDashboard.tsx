import { Box } from "@mui/material";

const AdminDashboard = () => {
  return (
    <Box display={{ display: "flex", flexDirection: "row" }}>
      <Box>Total Assessment</Box>
      <Box>Validated Assessment</Box>
      <Box>Pending Assessment</Box>
      <Box>Revised Assessment</Box>
    </Box>
  );
};

export default AdminDashboard;
