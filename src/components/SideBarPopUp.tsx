import { Box } from "@mui/material";
import setNavigationListByRoleId from "../helper/setNavigationListByRoleId";
import { sideBarPrimaryColor, sideBarPrimaryTextColor } from "../values/colors";
import { UsepLogo } from "../values/icons";
import INavigationList from "../values/interface/INavigationList";
import Header from "./sidebar/Header";
import Item from "./sidebar/Item";
import SubHeader from "./sidebar/SubHeader";

interface Props {
  isExpanded: boolean;
}

const SideBarPopUp = ({ isExpanded }: Props) => {
  const currentRoleId: number = 2;
  const currentList: INavigationList[] =
    setNavigationListByRoleId(currentRoleId);

  return (
    <Box
      sx={{
        width: isExpanded ? "42vh" : "10.5vh",
        height: "auto",
        minHeight: "100vh",
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
