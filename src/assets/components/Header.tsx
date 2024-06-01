import { Box, Button, Typography } from "@mui/material";

interface Props {
  toggleSideBar: () => void;
}

const Header = ({ toggleSideBar }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "lightblue",
        padding: "2vh",
      }}
    >
      <Button onClick={toggleSideBar} variant="contained" color="primary">
        Menu
      </Button>
      <Typography>Header</Typography>
    </Box>
  );
};

export default Header;
