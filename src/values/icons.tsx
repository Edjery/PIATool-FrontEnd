import MenuIcon from "@mui/icons-material/Menu";
import usepLogo from "../assets/logo/usep_logo.png";
import CustomIcon from "../components/common/CustomIcon";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import SchemaOutlinedIcon from "@mui/icons-material/SchemaOutlined";
import RecommendOutlinedIcon from "@mui/icons-material/RecommendOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

export const IconHome = () => <HomeOutlinedIcon />;
export const IconReport = () => <StickyNote2OutlinedIcon />;
export const IconLogout = () => <LogoutOutlinedIcon />;
export const IconWarning = () => <WarningAmberOutlinedIcon />;
export const IconDataScheme = () => <SchemaOutlinedIcon />;
export const IconRecommendation = () => <RecommendOutlinedIcon />;
export const IconSettings = () => <SettingsOutlinedIcon />;

export const IconMenu = () => <MenuIcon />;
export const UsepLogo = () => <CustomIcon img={usepLogo} />;
