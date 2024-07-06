import { Box } from "@mui/material";
import { adminDashbordCardContent } from "../../../values/list";
import AdminCardContainer from "./AdminCardContainer";

const AdminDashboard = () => {
  return (
    <Box display={{ display: "flex", flexDirection: "row" }}>
      {adminDashbordCardContent.map((card, index) => (
        <AdminCardContainer
          key={index}
          count={card.count}
          label={card.label}
          icon={card.icon}
          sx={{ bgcolor: card.bgColor, color: card.fontColor }}
        />
      ))}
    </Box>
  );
};

export default AdminDashboard;
