import { Typography } from "@mui/material";

interface Props {
  description: string;
}

const CardContainerDescription = ({ description }: Props) => {
  return (
    <Typography variant="body1" sx={{ textAlign: "justify" }}>
      {description}
    </Typography>
  );
};

export default CardContainerDescription;
