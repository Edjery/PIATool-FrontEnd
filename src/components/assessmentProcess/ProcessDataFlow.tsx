import { ChangeEvent, useState } from "react";
import {
  imgAcceptedFormat,
  imgMaxFileSize,
  imgSizeError,
  imgTypeError,
} from "../../values/values";
import CardContainer from "../common/CardContainer";
import FileInput from "./dataFlow/FileInput";
import Guide from "./dataFlow/Guide";
import Header from "./dataFlow/Header";

interface Props {
  file: File | null;
  onChange: (imageFile: File | null) => void;
}

const ProcessDataFlow = ({ onChange, file }: Props) => {
  const [fileURL, setFileURL] = useState<string | null>(null);

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
    </CardContainer>
  );
};
export default ProcessDataFlow;
