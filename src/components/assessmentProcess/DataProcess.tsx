import BottomButtonNavigators from "../common/BottomButtonNavigators";
import CardContainer from "../common/CardContainer";
import DataProcessSection from "./dataProcess/DataProcessSection";

const DataProcess = () => (
  <CardContainer variant="lg">
    <DataProcessSection />
    <BottomButtonNavigators />
  </CardContainer>
);

export default DataProcess;
