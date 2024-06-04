import { Box } from "@mui/material";

interface Props {
  img: string;
}

const CustomIcon = ({ img }: Props) => {
  return (
    <Box
      component="img"
      src={img}
      sx={{
        height: "5vh",
      }}
    />
  );
};

export default CustomIcon;
