import { Box } from "@mui/material";
import SetNavigationListByRoleId from "../helper/SetNavigationListByRoleId";
import { sideBarPrimaryColor, sideBarPrimaryTextColor } from "../values/colors";
import { UsepLogo } from "../values/icons";
import NavigationList from "../values/interface/NavigationList";
import Header from "./sidebar/Header";
import Item from "./sidebar/Item";
import SubHeader from "./sidebar/SubHeader";

interface Props {
  isExpanded: boolean;
}

const SideBarPopUp = ({ isExpanded }: Props) => {
  const currentRoleId: number = 2;
  const currentList: NavigationList[] =
    SetNavigationListByRoleId(currentRoleId);

  return (
    <Box
      sx={{
        width: isExpanded ? "42vh" : "10vh",
        height: "auto",
        minHeight: "100vh",
        backgroundColor: sideBarPrimaryColor,
        color: sideBarPrimaryTextColor,
        transition: "width 0.5s ease-out",
        overflow: "auto",
        zIndex: 1,
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
        // <Box sx={{ position: "fixed", width: "42vh", zIndex: 2 }}>
        <Box>
          <Header />
          <SubHeader />
          <Box sx={{ marginTop: "2vh" }}>
            {currentList.map((item, index) => (
              <Box key={index}>
                <Item icon={item.icon} name={item.name} url={item.url} />
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
  );
};

export default SideBarPopUp;
