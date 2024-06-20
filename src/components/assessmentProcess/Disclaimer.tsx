import { Box, Link, Typography } from "@mui/material";
import {
  disclaimerLinkPia,
  disclaimerParagraphA1,
  disclaimerParagraphA2,
  disclaimerParagraphB,
  disclaimerParagraphC,
  disclaimerTitle,
} from "../../values/string";
import { urlNpcPia } from "../../values/values";
import CardContainer from "../common/CardContainer";

const Paragraph = ({ paragraph }: { paragraph: string }) => (
  <Typography variant="body1" sx={{ mt: 2 }}>
    {paragraph}
  </Typography>
);

const Disclaimer = () => {
  return (
    <CardContainer variant="md">
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        {disclaimerTitle}
      </Typography>
      <Box sx={{ textAlign: "justify", mt: 2 }}>
        <Typography variant="body1">
          {disclaimerParagraphA1}{" "}
          <Link href={urlNpcPia} target="_blank" sx={{ fontWeight: "bold" }}>
            {disclaimerLinkPia}
          </Link>{" "}
          {disclaimerParagraphA2}
        </Typography>
        <Paragraph paragraph={disclaimerParagraphB} />
        <Paragraph paragraph={disclaimerParagraphC} />
      </Box>
    </CardContainer>
  );
};

export default Disclaimer;
