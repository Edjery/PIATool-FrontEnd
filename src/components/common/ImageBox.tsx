import { Box } from "@mui/material";

interface Props {
  img: string;
  height: string;
}

const ImageBox = ({ img, height }: Props) => {
  return (
    <Box
      component="img"
      src={img}
      sx={{
        height: height,
      }}
    />
  );
};

export default ImageBox;
