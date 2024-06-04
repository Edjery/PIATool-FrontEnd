import { Box, Typography } from "@mui/material";

interface Props {
  icon: () => JSX.Element;
  name: string;
}

const Item = ({ icon: Icon, name }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        paddingX: "2vh",
        paddingY: "1vh",
      }}
    >
      <Box sx={{ marginRight: "2vh" }}>
        <Icon />
      </Box>
      <Typography>{name}</Typography>
    </Box>
  );
};

export default Item;
