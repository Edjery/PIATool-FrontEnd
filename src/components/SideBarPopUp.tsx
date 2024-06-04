import { Box } from "@mui/material";
import { sideBarPrimaryColor, sideBarPrimaryTextColor } from "../values/colors";
import { IconMenu, UsepLogo } from "../values/icons";
import Header from "./sidebar/Header";
import Item from "./sidebar/Item";
import SubHeader from "./sidebar/SubHeader";

interface Props {
  isExpanded: boolean;
}

const SideBarPopUp = ({ isExpanded }: Props) => {
  const items = [
    { icon: IconMenu, name: "Menu" },
    { icon: IconMenu, name: "Usep" },
  ];

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
        {isExpanded ? (
          <Box>
            <Header />
            <SubHeader />
            <Box sx={{ marginTop: "2vh" }}>
              {items.map((item, index) => (
                <Box key={index}>
                  <Item icon={item.icon} name={item.name} />
                </Box>
              ))}
            </Box>
          </Box>
        ) : (
          <Box sx={{ display: "flex", padding: "2.5vh" }}>
            <Box sx={{ marginTop: "0.5vh", marginRight: "2vh" }}>
              <UsepLogo />
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default SideBarPopUp;
