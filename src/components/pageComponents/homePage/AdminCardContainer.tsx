import { Box, SxProps, Typography } from "@mui/material";
import { CustomIconType } from "../../../values/type";

interface Props {
  count: string;
  label: string;
  icon: CustomIconType;
  sx?: SxProps;
}

const AdminCardContainer = ({ count, label, icon: Icon, sx }: Props) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "row",
      marginX: "2vh",
      padding: "2vh",
      bgcolor: "Gray",
      minHeight: "15vh",
      minWidth: "30vh",
      borderRadius: "1vh",
      alignContent: "center",
      textAlign: "left",
      justifyContent: "space-between",
      color: "white",
      ...sx,
    }}
  >
    <Box>
      <Typography variant="h5" sx={{ mb: "2vh" }}>
        <strong>{count}</strong>
      </Typography>
      <Box>{label}</Box>
    </Box>
    <Box>
      <Icon sx={{ fontSize: "6vh" }} />
    </Box>
  </Box>
);

export default AdminCardContainer;
