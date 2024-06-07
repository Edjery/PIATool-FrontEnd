import { Box, Button, Link, Typography } from "@mui/material";
import { btnStart, disclaimerTitle } from "../../values/string";
import CardContainer from "../common/CardContainer";

const Disclaimer = () => {
  return (
    <CardContainer variant="md">
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        {disclaimerTitle}
      </Typography>
      <Box sx={{ textAlign: "justify", mt: 2 }}>
        <Typography variant="body1">
          This{" "}
          <Link
            href="https://privacy.gov.ph/wp-content/uploads/2022/01/NPC_PIA_0618.pdf"
            target="_blank"
            sx={{ fontWeight: "bold" }}
          >
            Privacy Impact Assessment
          </Link>{" "}
          (PIA) is an instrument for assessing the potential impacts on privacy
          of a process, information system, program, software module, device or
          other initiative which processes personal information and sensitive
          information in consultation with stakeholders, for taking actions as
          necessary to treat, mitigate and avoid privacy risk.
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          This PIA is more than a tool, it is a process that begins at the
          earliest possible stages of an initiative when there are still
          opportunities to influence its outcome and thereby ensure privacy by
          design. It is a process that continues until, and even after, the
          project has been deployed. Initiatives vary substantially in scale and
          impact.
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          This website will help you create a PIA following a step-by-step
          instructional process that will result in a PIA report that may
          include documentation about measures taken for risk treatment to be
          monitored and reviewed by the DPO (Data Protection Officer).
        </Typography>
      </Box>
      <Box sx={{ marginTop: "3vh" }}>
        <Button variant="contained">{btnStart}</Button>;
      </Box>
    </CardContainer>
  );
};

export default Disclaimer;
