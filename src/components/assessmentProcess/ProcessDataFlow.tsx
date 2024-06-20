import BottomButtonNavigators from "../common/BottomButtonNavigators";
import CardContainer from "../common/CardContainer";
import FileInput from "./dataFlow/FileInput";
import Guide from "./dataFlow/Guide";
import TitleDescription from "./dataFlow/TitleDescription";

const ProcessDataFlow = () => {
  return (
    <CardContainer variant="lg">
      <TitleDescription />
      <FileInput />
      <Guide />
      <BottomButtonNavigators />
    </CardContainer>
  );
};
export default ProcessDataFlow;
