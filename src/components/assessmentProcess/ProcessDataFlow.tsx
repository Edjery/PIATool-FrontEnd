import { ChangeEvent, useState } from "react";
import {
  imgAcceptedFormat,
  imgMaxFileSize,
  imgSizeError,
  imgTypeError,
} from "../../values/values";
import ButtonStepsNavigator from "../common/ButtonNavigator";
import CardContainer from "../common/CardContainer";
import FileInput from "./dataFlow/FileInput";
import Guide from "./dataFlow/Guide";
import Header from "./dataFlow/Header";
import IStepControls from "./interface/IStepControls";

interface Props {
  file: File | null;
  onChange: (imageFile: File | null) => void;
  stepControls: IStepControls;
}

const ProcessDataFlow = ({ onChange, file, stepControls }: Props) => {
  const [fileURL, setFileURL] = useState<string | null>(
    file && URL.createObjectURL(file)
  );

  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    if (selectedFile) {
      if (!imgAcceptedFormat.includes(selectedFile.type)) {
        alert(imgTypeError);
        onChange(null);
        return;
      }

      if (selectedFile.size > imgMaxFileSize) {
        alert(imgSizeError);
        onChange(null);
        return;
      }

      setFileURL(URL.createObjectURL(selectedFile));
      onChange(selectedFile);
    }
  };
  return (
    <CardContainer variant="lg">
      <Header />
      <FileInput file={file} fileUrl={fileURL} onChange={onFileChange} />
      <Guide />
      <ButtonStepsNavigator
        activeStep={stepControls.activeStep}
        onNext={stepControls.onNext}
        onBack={stepControls.onBack}
        stepsComponentsLength={stepControls.stepsComponentsLength}
      />
    </CardContainer>
  );
};
export default ProcessDataFlow;
