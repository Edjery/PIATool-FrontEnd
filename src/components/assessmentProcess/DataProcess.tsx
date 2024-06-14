import { Box, Button } from "@mui/material";
import { btnBack, btnNext } from "../../values/string";
import CardContainer from "../common/CardContainer";
import SectionOne from "./dataProces/SectionOne";
import BottomButtonNavigators from "../common/BottomButtonNavigators";

const DataProcess = () => (
  <CardContainer variant="lg">
    <SectionOne />
    <BottomButtonNavigators />
  </CardContainer>
);

export default DataProcess;
