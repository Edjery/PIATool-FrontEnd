import { Box } from "@mui/material";
import { sideBarPrimaryColor } from "../assets/values/colors";

interface Props {
  isExpanded: boolean;
}

const SideBarPopUp = ({ isExpanded }: Props) => {
  return (
    <Box>
      <Box
        sx={{
          width: isExpanded ? "36vh" : "10vh",
          height: "100vh",
          backgroundColor: sideBarPrimaryColor,
          transition: "width 0.5s ease-out",
          overflow: "auto",
          "&::-webkit-scrollbar": {
            width: "1vh",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "transparent",
            borderRadius: "6px",
          },
          "&:hover::-webkit-scrollbar-thumb": {
            backgroundColor: "#C0C0C0",
          },
        }}
      ></Box>
    </Box>
  );
};

export default SideBarPopUp;
