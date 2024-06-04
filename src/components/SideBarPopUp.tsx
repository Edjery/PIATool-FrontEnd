import { Box } from "@mui/material";
import { sideBarPrimaryColor, sideBarPrimaryTextColor } from "../values/colors";
import Header from "./sidebar/Header";
import SubHeader from "./sidebar/SubHeader";

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
          color: sideBarPrimaryTextColor,
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
      >
        <Header />
        <SubHeader />
      </Box>
    </Box>
  );
};

export default SideBarPopUp;
