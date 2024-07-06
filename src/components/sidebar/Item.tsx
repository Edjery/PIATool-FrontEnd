import { Box, Link, Typography } from "@mui/material";
import { sideBarPrimaryTextColor } from "../../values/colors";
import { CustomIconType } from "../../values/type";

interface Props {
  icon: CustomIconType;
  name: string;
  url: string;
}

const Item = ({ icon: Icon, name, url }: Props) => {
  return (
    <Link href={url} underline="none">
      <Box
        sx={{
          display: "flex",
          paddingX: "2vh",
          paddingY: "1vh",
          color: sideBarPrimaryTextColor,
        }}
      >
        <Box sx={{ marginRight: "2vh" }}>
          <Icon />
        </Box>
        <Typography>{name}</Typography>
      </Box>
    </Link>
  );
};

export default Item;
