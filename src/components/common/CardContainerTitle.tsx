import { Typography } from "@mui/material";

interface Props {
  title: string;
}

const CardContainerTitle = ({ title }: Props) => {
  return (
    <Typography variant="h6" sx={{ textAlign: "left", fontWeight: "bold" }}>
      {title}
    </Typography>
  );
};

export default CardContainerTitle;
